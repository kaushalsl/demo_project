import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AutoCompleteCompleteEvent} from 'primeng/autocomplete';

declare var $: any;

@Component({
  selector: 'app-component-binding',
  templateUrl: './component-binding.component.html',
  styleUrls: ['./component-binding.component.scss']
})
export class ComponentBindingComponent implements OnInit {
  userId!: string; // this is url parameter passing value
  @Input() title: any; // this is routing module data passing key value
  @Input() dummy_data: any; // this is getting resolver data in passing routing module ts file

  images: string[] = [];
  testForm!: FormGroup;
  selectedItem: any;

  fillDataObj: any = {
    item1: '',
    item2: ''
  };

  constructor() {
    this.testForm = new FormGroup({
      test: new FormControl('')
    });
  }

  ngOnInit() {
    console.log(this.userId);
    console.log(this.title);
    console.log(this.dummy_data);

    const setImages = setInterval(() => {
      const img1: any = '<img src="' + this.clearCache('assets/images/1.png') + '" alt=""> ';
      const img2: any = '<img src="' + this.clearCache('assets/images/abc.png') + '" alt=""> ';
      this.images = [img1, img2];

      $('#result').html(img1);
    }, 2000);

    // use promise example
    this.createPromise().then(res => console.log(res)).catch(err => console.log(err));
  }

  clearCache(url: string) {
    return url;
  }

  createPromise() {
    return new Promise((resolve, reject) => {
      let a = 7;
      if (a === 8) {
        resolve('match value');
      } else {
        reject('not match value');
      }
    });
  }

  setValueForm() {
    this.testForm.patchValue({
      test: '17'
    });
    console.log(this.testForm.value);
  }

  search(event: AutoCompleteCompleteEvent, filedName: string) {
    this.fillDataObj[filedName] = event.query;
    console.log(event.query);
    console.log(this.selectedItem);
    console.log(this.fillDataObj);
    // this.suggestions = [...Array(10).keys()].map(item => event.query + '-' + item);
  }

  clearData() {
    console.log('clear call');
    this.selectedItem = this.selectedItem || 'NA';
    console.log(this.selectedItem);
  }
}
