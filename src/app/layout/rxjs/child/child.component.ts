import {Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  count: number = 0;
  @Input() sendChild: any;
  receiveParentData: any;
  test: any = 'Child test';

  @Output() countChanged: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('On Changes');
    this.receiveParentData = this.sendChild; // this is if send data from parent to child as new value every time declare onChanges lifecycle
  }

  ngOnInit(): void {
    // console.log('on init');
    // this.receiveParentData = this.sendChild;
  }

  ngDoCheck() {
    // console.log(this.sendChild);
  }

  increment() {
    this.count++;
    this.countChanged.emit(this.count);
  }

  decrement() {
    if (this.count === 0) {
      alert('Value is 0 Not Decrement Value.');
      return;
    }
    this.count--;
    this.countChanged.emit(this.count);
  }
}
