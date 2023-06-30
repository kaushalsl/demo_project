import {Component, OnInit} from '@angular/core';
import {AppService} from '@servicesapp.service';
import {debounceTime, exhaustMap, of, Subject} from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit {
  public btnGetCall: Subject<number> = new Subject<number>();
  counter: number = 0; // update value in button click event
  finalCountValue: number = 0; // when user multiple click on button after update value

  constructor(public _appService: AppService) {
  }

  ngOnInit() {
    this.btnGetCall.pipe(
      debounceTime(800),
      // distinctUntilChanged(),
      exhaustMap(() => of(this.counter))
    ).subscribe((response: any) => {
      console.log(this.counter);
      this.finalCountValue = this.counter;
    });
  }

  sendData() {
    this.counter++;
    this.btnGetCall.next(this.counter);
  }

  showToast() {
    this._appService.toastService('success', 'Hello Toast');
  }
}
