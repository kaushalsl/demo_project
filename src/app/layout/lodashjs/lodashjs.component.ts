import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {AppService} from '@services/app.service';


@Component({
  selector: 'app-lodashjs',
  templateUrl: './lodashjs.component.html',
  styleUrls: ['./lodashjs.component.scss']
})
export class LodashjsComponent implements OnInit {
  public repeatArray = '';
  public model!: NgbDateStruct;
  counter = 0;

  constructor(private appService: AppService) {
  }

  increment() {
    this.counter++;
  }

  ngOnInit(): void {
    this.repeatArray = _.repeat('Repeat ', 3);
    console.log(this.repeatArray);
  }
}
