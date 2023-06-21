import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appTest]'
})
export class TestDirective implements OnInit {
  @Input() ttClass!: string;
  @Output() sendParams: EventEmitter<any> = new EventEmitter<any>();
  public elementSelected = false;

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.el.nativeElement.classList.add(this.ttClass);
  }

  /*@HostListener('click')
  private onClick() {
    this.elementSelected = !this.elementSelected;
    if (this.elementSelected) {
      this.el.nativeElement.classList.add('blue');
    } else {
      this.el.nativeElement.classList.remove('blue');
    }
  }*/

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event: any) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const index = this.el.nativeElement.id;
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.emitValue(365, index) : null;
  }

  emitValue(value: any, index: any) {
    const senddata = {
      value: value,
      index: index
    };
    this.sendParams.emit(senddata);
  }
}
