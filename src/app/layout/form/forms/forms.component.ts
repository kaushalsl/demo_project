import {AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {delay, distinctUntilChanged, Subject, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {CountUpOptions} from 'countup.js';
import {AppService} from '@servicesapp.service';
import {CustomValidator} from '@shared/validation/validation';
import {validationMessage} from '@shared/validation/validation-message';

declare var $: any;

export function removeSpaces(control: AbstractControl) {
  if (control && control.value && !control.value.replace(/\s/g, '').length) {
    control.setValue('');
    console.log(control.value);
    return {required: true};
  } else {
    return null;
  }
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, AfterViewInit {
  public testForm!: UntypedFormGroup;
  public groupArrayForm: UntypedFormGroup;
  public countryList = [
    {id: 1, name: 'India'},
    {id: 2, name: 'USA'}
  ];
  public formSubmitBtn: Subject<any> = new Subject();
  public cars: any = [];
  public countOptions: CountUpOptions = {
    duration: 4,
    scrollSpyOnce: true,
    enableScrollSpy: true
  };

  @ViewChild('counter') counter!: ElementRef;
  param = 0;
  protected readonly validationMessage = validationMessage;

  constructor(
    public _appService: AppService,
    public fb: UntypedFormBuilder,
    private http: HttpClient
  ) {
    this.testForm = this.fb.group({
      name: new FormControl('Kaushal'),
      address: this.fb.group({
        street: new FormControl('Ahmedabad')
      })
    });

    this.groupArrayForm = this.fb.group({
      address: this.fb.array([this.newChild()]),
    });

    this.getAjaxMethod().subscribe((res: any) => {
      this.cars = res;
    });
  }

  get address() {
    return this.groupArrayForm.get('employees') as FormArray;
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    // this below function check user input value change or not if not changes value does not send duplicate data
    this.formSubmitBtn.pipe(
      distinctUntilChanged((previous, current) => JSON.stringify(previous) === JSON.stringify(current)),
      tap(() => console.log('changes'))
    ).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err => console.log(err))
    });
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event: any) {
    const rect = this.counter.nativeElement.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param = 365 : null;
  }

  submit(data: any) {
    this.formSubmitBtn.next(data);
  }

  getAjaxMethod() {
    // return this.http.get<any>('http://dummy.restapiexample.com/api/v1/employees');
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos').pipe(delay(1000));
  }

  onChange($event: any) {
    console.log($event);
  }

  childForm(): FormArray {
    return this.groupArrayForm.get('address') as FormArray;
  }

  f1(index: any, formControlName: string) {
    return this.childForm().controls[index].get(formControlName);
  }

  newChild(): FormGroup {
    return this.fb.group({
      street: ['', [CustomValidator.emailValidator]],
    });
  }

  addChild() {
    this.childForm().push(this.newChild());
  }

  removeChild(i: number) {
    this.childForm().removeAt(i);
  }

  onSubmit() {
    console.log(this.groupArrayForm.value);
  }

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }
}
