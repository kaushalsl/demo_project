import {Component, computed, OnInit, signal} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {toSignal} from '@angular/core/rxjs-interop';
import {CanComponentDeactivate} from '@shared/guard/can-deactivate-guard.service';

@Component({
  selector: 'app-signals',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit, CanComponentDeactivate {
  infoForm!: FormGroup;
  firstName = signal('Kaushal');
  lastName = signal('Prajapati');
  data = toSignal(this._http.get('https://jsonplaceholder.typicode.com/posts'));
  fullName = computed(() => this.firstName() + ' ' + this.lastName());
  count: number = 1;
  productForm!: FormGroup;
  productList: any = signal<any>([]);
  totalPrice = computed(() =>
    this.productList().reduce((acc: any, curr: any) => {
      return (+acc) + (+curr.pPrice);
    }, 0)
  );

  marqueeText: string = '';

  constructor(private _http: HttpClient) {
    this.infoForm = new FormGroup({
      fName: new FormControl(this.firstName()),
      lName: new FormControl(this.lastName())
    });


    this.productForm = new FormGroup({
      pName: new FormControl(),
      pPrice: new FormControl()
    });
  }


  ngOnInit() {
    /*const source = timer(1000, 2000);
    const subscribe = source.subscribe((val: any) => {
      this.marqueeText = val;
      console.log(this.marqueeText);
    });*/
  }


  addProduct(product: any) {
    this.productList.mutate((data: any) => {
      data.push(product);
    });
  }

  removeProduct(index: number) {
    this.productList.mutate((data: any) => {
      data.splice(index, 1);
    });
  }

  changeName(formValue: any) {
    this.firstName.set(formValue.fName);
    this.lastName.set(formValue.lName);
  }

  callHttpApi() {
    this._http.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe({
        next: value => console.log(value)
      });
  }

  canExit() {
    /* if (this.count === 2) {
       return false;
     } else {
       return true;
     }*/

    if (confirm('Are you sure you want to exit')) {
      return true; // goto back access
    }
    return false; // false means not goto back or leave page
  }
}
