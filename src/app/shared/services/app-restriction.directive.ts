import {Directive, ElementRef, HostBinding, Renderer2} from '@angular/core';

@Directive({
  selector: '[appRestriction]'
})
export class AppRestrictionDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    //Prevent Ctrl+S (and Ctrl+W for old browsers and Edge)
    document.onkeydown = function (e: any) {
      e = e || window.event;//Get event
      if (!e.ctrlKey) return;
      const code = e.which || e.keyCode;//Get key code
      switch (code) {
        // add keycode of your key which you want to block/disable
        case 65://Block Ctrl+A
        case 97://Block Ctrl+a
          e.preventDefault();
          e.stopPropagation();
          break;
      }
    };

    // remove below to use cut copy paste code enable
    /*const events = ['cut', 'copy', 'paste', 'contextmenu'];
    events.map((e: any) => renderer.listen(el.nativeElement, e, (event: any) => {
      event.preventDefault();
    }));*/
  }

  // disable mouse selection text
  @HostBinding('style')
  get myStyle() {
    return {
      '-webkit-touch-callout': 'none',
      '-webkit-user-select': 'none',
      '-khtml-user-select': 'none',
      '-moz-user-select': 'none',
      '-ms-user-select': 'none',
      'user-select': 'none'
    };
  }
}
