import {Directive, ElementRef, AfterViewInit, DoCheck} from '@angular/core';

@Directive({
  selector: '[nh-focus]'
})
export class nhFocusDirective implements AfterViewInit, DoCheck {
  private hasFocusBeenSetOnce: boolean = false;
  private initialised: boolean = false;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initialised = true;
    this.ngDoCheck();
  }

  ngDoCheck() {
    if (!this.initialised) { return; }
    const visible = !!this.el.nativeElement.offsetParent;
    if (visible && !this.hasFocusBeenSetOnce) {
      setTimeout(() => {
        this.el.nativeElement.focus();
        this.hasFocusBeenSetOnce = true;
      }, 1);
    }
  }
}
