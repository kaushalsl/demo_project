import {Directive, ElementRef, Input} from '@angular/core';
import {ColorDirective} from '@layout/image-optimization/directive/color.directive';
import {ClickDirective} from '@layout/image-optimization/directive/click.directive';

@Directive({
  selector: '[appMerger]',
  standalone: true,
  hostDirectives: [
    {directive: ColorDirective, inputs: ['color']},
    {directive: ClickDirective, outputs: ['clickEmitter']}
  ]
})
export class AppMergerDirective {

  @Input()
  innerMessage!: string;

  constructor(private elementRef: ElementRef) {
  }

  /*  @HostListener('window:resize', ['$event'])
    onResize(e: any) {
      if (e.target.innerWidth <= 300) {
        this.elementRef.nativeElement.innerHTML = 'Screen not supported';
      } else {
        console.log('else');
        this.elementRef.nativeElement.innerHTML = this.innerMessage;
      }
    }*/

}
