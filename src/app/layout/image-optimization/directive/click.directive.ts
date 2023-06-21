import {Directive, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {
  @Output()
  clickEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  @HostListener('click', ['$event'])
  onClick(e: any) {
    this.clickEmitter.emit(e);
  }

}
