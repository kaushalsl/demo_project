import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {HttpApiService} from '@services/http-api.service';
import {FormGroup} from '@angular/forms';
import * as _ from 'lodash';
import {Location, DatePipe} from '@angular/common';
import Swal from 'sweetalert2';
import {CountUpOptions} from 'countup.js';
import {ReplaySubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Books} from '@layout/rxjs/books';
import {ConfigService} from '@servicesconfig.service';

declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class AppService {
  user: any = {
    picture: 'assets/images/default-profile.png',
    name: ''
  };
  defaultImage = 'assets/images/upload.png';
  renderer: Renderer2;
  passwordType = '';
  passwordIcon = '';
  dataAPI: any = {};
  emitData = new ReplaySubject(4);
  name = '';
  appConfig: any = this.configService.configuration;
  countOptions: CountUpOptions = {
    duration: 4,
    scrollSpyOnce: false,
    enableScrollSpy: false
  };

  constructor(
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private rendererFactory: RendererFactory2,
    private _httpService: HttpApiService,
    private _location: Location,
    private _toast: ToastrService,
    private router: Router,
    private datePipe: DatePipe,
    private http: HttpClient,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.setPasswordEyeIcon();
    this.dataAPI = {
      fetchBookAPI: () => {
        return this.http.get<Books[]>('https://jsonplaceholder.typicode.com/posts');
      }
    };
  }

  transformDate(startDate: any, endDate: any) {
    return '\'' + this.datePipe.transform(startDate, 'yyyy_MM_dd') + '\' and \'' + this.datePipe.transform(endDate, 'yyyy_MM_dd') + '\'';
  }

  closeRootLoading() {
    let loader = this.renderer.selectRootElement('#preloader');
    this.renderer.setStyle(loader, 'display', 'none');
  }

  userName() {
    this.user.name = this.userDetails() ? this.userDetails().name : '';
  }

  getToken() {
    return (this.userDetails()) ? `Bearer ${this.userDetails().token}` : '';
  }

  getUserRole() {
    return (this.userDetails()) ? this.userDetails().role.toLowerCase() : '';
  }

  userDetails() {
    return JSON.parse(<any>localStorage.getItem('user-info'));
  }

  rootNavigation() {
    // this.router.navigate(['/home']).then();
    this.router.navigate(['/admin']).then();
  }

  pageNavigation(url: string) {
    this.router.navigate([`${url}`]).then();
  }

  gotoBack() {
    this._location.back();
  }

  logout() {
    localStorage.removeItem('user-info');
  }

  dataTableOptions() {
    return {
      info: false,
      paging: false,
      searching: false,
      lengthMenu: [[-1, 5, 10], ['All', 5, 10]],
      order: [],
      bSort: false,
      fixedHeader: true,
      responsive: true,
      scrollY: '55vh',
      scrollCollapse: true,
      scrollX: true
    };
  }

  dateFormatWithDot(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      ('0' + d.getDate()).slice(-2),
      ('0' + (d.getMonth() + 1)).slice(-2),
      d.getFullYear(),
    ].join('.');
  }

  dateFormatDDMMYY(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      ('0' + d.getDate()).slice(-2),
      ('0' + (d.getMonth() + 1)).slice(-2),
      d.getFullYear(),
    ].join('-');
  }

  dateFormatYYMMDD(date: any) {
    const d = (date) ? new Date(date) : new Date();
    return [
      d.getFullYear(),
      ('0' + (d.getMonth() + 1)).slice(-2),
      ('0' + d.getDate()).slice(-2),
    ].join('-');
  }

  dateIsoString(dateString: any) {
    // const [day, month, year] = dateString.split('-');
    return new Date(dateString).toISOString();
  }

  convertOriginalDateFormat(date: any) {
    return date.split('-').reverse().join('-');
  }

  tConvert12(time: any) {
    // Check a correct time format and split into component
    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

    if (time.length > 1) { // If a time format corrects
      time = time.slice(1);  // Remove full string match value
      time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join(''); // return adjusted time or original string
  }

  tConvert24(timeStr: any) {
    const [time, modifier] = timeStr.split(' ');
    let [hours, minutes] = time.split(':');
    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
    return `${hours}:${minutes}`;
  }

  startEndTimeCompare(startTime: any, endTime: any) {
    let timeFrom = new Date();
    let temp = startTime.split(':');
    timeFrom.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timeFrom.setMinutes(parseInt(temp[1]));

    let timeTo = new Date();
    temp = endTime.split(':');
    timeTo.setHours((parseInt(temp[0]) - 1 + 24) % 24);
    timeTo.setMinutes(parseInt(temp[1]));

    const status = timeTo < timeFrom;
    if (status) {
      this.toastService('warning', 'open time should be smaller than close time!');
    }
    return status;
  }

  validateDates(sDate: string, eDate: string) {
    /*if ((sDate == null || eDate == null)) {
      return {isError: true, errorMessage: 'Start date and end date are required.'};
    }*/

    if ((sDate != null && eDate != null) && (eDate) < (sDate)) {
      return {isError: true, errorMessage: 'End date should be grater then start date.'};
    }

    return {isError: false, errorMessage: ''};
  }

  openLinkNewWindow(url: string) {
    window.open(`//${url}`, '_blank');
  }

  onImgError(event: any): any {
    event.target.src = 'assets/images/noimage.png' + this.imgCacheClear();
    // Do other stuff with the event.target
  }

  fileType() {
    return {image: 'image', pdf: 'pdf'};
  }

  fileInputObject(type: string) {
    const types: any = {
      [this.fileType().image]: {
        allowExtension: ['image/png', 'image/jpeg', 'image/jpg'],
        errorMessage: 'Invalid image format, please select a valid image format',
        size: 500,
        sizeMessage: 'Image size should be less then 500kb'
      },
      [this.fileType().pdf]: {
        allowExtension: ['application/pdf'],
        errorMessage: 'Invalid pdf format, please select a valid pdf format',
        size: 500,
        sizeMessage: 'pdf size should be less then 500kb'
      }
    };
    return types[type];
  }

  handleFileInput(event: any, fileType: string) {
    return new Promise((resolve) => {
      let imageObj: any = {
        base64: '',
        ext: '',
        preview: ''
      };

      const file: File = event.target.files[0];
      if (file) {
        const allowed_types = this.fileInputObject(fileType).allowExtension;
        if (!_.includes(allowed_types, file.type)) {
          this.toastService('warning', this.fileInputObject(fileType).errorMessage);
          resolve(imageObj);
          return;
        }

        if (Math.round(file.size / 1000) > this.fileInputObject(fileType).size) {
          this.toastService('warning', this.fileInputObject(fileType).sizeMessage);
          resolve(imageObj);
          return;
        }
      }

      if (event.target.files && event.target.files[0]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]); // read file as data url
        reader.onload = (event: any) => {
          if (event != undefined) {
            imageObj = {
              base64: this.replaceToBase64(event.target.result, fileType),
              ext: ('.' + event.target.result.split(';')[0].split('/')[1]),
              preview: event.target.result
            };
          }
          resolve(imageObj);
        };
      }
    });
  }

  handleWebCamImage(webcamImage: any) {
    let imageObj: any = {
      base64: '',
      ext: '',
      preview: ''
    };
    return new Promise((resolve) => {
      imageObj = {
        base64: this.replaceToBase64(webcamImage.imageAsDataUrl, this.fileType().image),
        ext: ('.' + 'jpeg'),
        preview: webcamImage.imageAsDataUrl
      };
      resolve(imageObj);
    });
  }

  replaceToBase64(imageSrc: any, type: string) {
    return (type === this.fileType().image) ? imageSrc.replace(/^data:image\/(png|jpg|jpeg);base64,/, '') : imageSrc.replace(/^data:application\/(pdf);base64,/, '');
  }

  imgCacheClear() {
    return '?t=' + Math.random();
  }

  editImagePreview(dataObj: any, fileInputName: string, extName: string) {
    return (dataObj[fileInputName + '_' + extName] ? `${this._httpService.baseUrl}${dataObj[fileInputName + '_' + extName]}` : this.defaultImage) + this.imgCacheClear();
  }

  editImagePreview1(dataObj: any, fileInputName: string) {
    return (dataObj[fileInputName] ? `${this._httpService.baseUrl}${dataObj[fileInputName]}` : this.defaultImage) + this.imgCacheClear();
  }

  buildImageSrc(imageUrl: string) {
    return `${this._httpService.baseUrl}${imageUrl}${this.imgCacheClear()}`;
  }

  checkImage(path: string) {
    if (path === null || path === '') {
      return '';
    } else {
      const ext = path.substring(path.lastIndexOf('.') + 1);
      return (ext === '') ? '' : `.${ext}`;
    }
  }

  statusMsg(formValue: any, msg: any) {
    if (formValue.srno === 0) {
      this.toastService('success', `${msg} Added Successfully.`);
    } else {
      this.toastService('info', `${msg} Updated Successfully.`);
    }
  }

  toastService(status: string, msg: string) {
    this._toast.clear();
    const obj: any = {
      timeOut: 2000,
      positionClass: 'toast-top-center',
      preventDuplicates: false
    };
    if (status === 'success') {
      this._toast.success(msg, '', obj);
    } else if (status === 'error') {
      this._toast.error(msg, '', obj);
    } else if (status === 'info') {
      this._toast.info(msg, '', obj);
    } else if (status === 'warning') {
      this._toast.warning(msg, '', obj);
    }
  }

  sweetAlertModal(message: string) {
    Swal.fire({title: message, allowOutsideClick: false});
  }


  sweetAlertToast() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully'
    });
  }

  apiCallReqError() {
    /*this._toast.close();
    // this.closeRootLoading();
    this._toast.error('Something Went Wrong....', {
      duration: 2000,
      position: 'top-right'
    });*/
  }

  apiResponseFalse(res: any) {
    this._toast.clear();
    this.toastService('warning', res.message);
  }

  isEmptyObject(value: any) {
    return Object.keys(value).length === 0 && value.constructor === Object;
  }

  isObject(value: any) {
    return (typeof value === 'object' && value !== null && !Array.isArray(value));
  }

  destroyModal(id: any) {
    $('#' + id).modal('hide');
  }

  openModal(id: any) {
    $('#' + id).modal({keyboard: false, backdrop: 'static'}).modal('show');
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  slideConfig() {
    return {
      // autoplay: true,
      autoplaySpeed: 3000,
      arrows: true,
      // fade: true,
      cssEase: 'linear',
      slidesToShow: 1,
      // adaptiveHeight: true,
    };
  }

  getRandomIntBetween(min: any, max: any) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // below function is used to show or hide the password text with the help of eye icon in the enter password.
  hideShowPassword() {
    this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
    this.passwordIcon = this.passwordIcon === 'fa-eye-slash' ? 'fa-eye' : 'fa-eye-slash';
  }

  setPasswordEyeIcon() {
    this.passwordType = 'password';
    this.passwordIcon = 'fa-eye-slash';
  }

}
