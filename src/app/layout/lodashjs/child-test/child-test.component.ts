import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child-test',
  templateUrl: './child-test.component.html',
  styleUrls: ['./child-test.component.scss']
})
export class ChildTestComponent implements OnInit {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {
  }

  increment() {
    this.counterChange.emit(++this.counter);
  }

  ngOnInit(): void {
  }

}
