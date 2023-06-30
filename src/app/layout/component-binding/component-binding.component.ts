import {Component, Input, OnInit} from '@angular/core';

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

  constructor() {

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
}
