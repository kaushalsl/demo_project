import {Component} from '@angular/core';
import {Subscription} from 'rxjs';
import {AppService} from '@servicesapp.service';

@Component({
  selector: 'app-subject-reply',
  templateUrl: './subject-reply.component.html',
  styleUrls: ['./subject-reply.component.scss']
})
export class SubjectReplyComponent {
  itemList1 = [
    'Angular 1', 'Angular 2'
  ];
  itemList2: any = [];
  btnStatus = false;

  subscription1!: Subscription;

  constructor(public _appService: AppService) {
    this._appService.emitData
      .subscribe((res: any) => {
        this.itemList1.push(res);
      });
  }

  addItemsList1(data: any) {
    this._appService.emitData.next(data);
  }

  subscribeList1() {
    if (this.btnStatus) {
      this.subscription1.unsubscribe();
    } else {
      this.subscription1 = this._appService.emitData
        .subscribe((res: any) => {
          this.itemList2.push(res);
        });
    }
    this.btnStatus = !this.btnStatus;
  }
}
