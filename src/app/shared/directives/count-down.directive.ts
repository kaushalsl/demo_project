import {Directive, ElementRef, HostListener} from '@angular/core';


@Directive({
  selector: '[appCountDown]'
})
export class CountDownDirective {
  param: any;

  constructor(private el: ElementRef) {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onWindowScroll(event: any) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const elemTop = rect.top;
    const elemBottom = rect.bottom;
    (elemTop >= 0) && (elemBottom <= window.innerHeight) ? this.param = 365 : null;
  }

  /*private wasViewed$ = new Subject<void>();
  private subs = new Subscription();
  @Output() onView = new EventEmitter<void>();

  constructor(private elementRef: ElementRef) {
    this.listenScroll();
  }

  ngOnDestroy() {
    this.wasViewed$.complete();
    this.subs.unsubscribe();
  }

  private listenScroll() {
    this.subs.add(
      fromEvent(window, 'scroll')
        .pipe(takeUntil(this.wasViewed$))
        .pipe(debounceTime(100))
        .subscribe(() => {
          if (this.isInViewport()) {
            this.onView.emit();
            this.wasViewed$.next();
            this.wasViewed$.complete();
          }
        })
    );
  }

  private isInViewport() {
    const elem = this.elementRef.nativeElement;
    const bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }*/
}
