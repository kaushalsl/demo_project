import {Component, OnInit} from '@angular/core';

export class printName {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent implements OnInit {
  param = [0, 0, 0, 0];

  constructor() {
  }

  ngOnInit(): void {
    const user = [new printName('Kaushal').name, new printName('Ravi').name];
    console.log(user);
    this.greeter(this.printToConsole);
  }

  greeter(fn: (a: string) => void) {
    fn('Hello World');
  }

  printToConsole(val: string) {
    console.log(val);
  }

  receiveParam(event: any) {
    this.param[event.index] = event.value;
  }
}
