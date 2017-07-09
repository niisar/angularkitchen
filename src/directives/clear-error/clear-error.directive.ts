import {Directive, ElementRef, Input, Renderer, OnChanges, AfterViewInit, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';


@Directive({
  selector: '[nhClearErrorOnChange]'
})
export class nhClearErrorDirective implements OnInit, AfterViewInit {
  el: any;
  @Input() nhClearErrorOnChange: string;
  @Input() formGroup: FormGroup;

  formControl: AbstractControl;
  constructor(private elementRef: ElementRef,
              private renderer: Renderer) {
  }
  ngOnInit() {
    this.formControl = this.formGroup.get('offerCode');
  }

  ngAfterViewInit() {
    this.el = this.elementRef.nativeElement.querySelector('input');
    this.renderer.listen(this.el, 'blur', (event: any) => {
      // this.el.value = this.getFormattedValue(this.formatInput, event.target.value);

      let errorNames: string[] = this.nhClearErrorOnChange.split(',');
      if (this.formControl.errors) {
        for (let i = 0; i < errorNames.length; i++) {
          console.log(errorNames[i]);
          if (this.formControl.errors[errorNames[i]]) {
            this.formControl.setErrors(null);
            break;
          }
          // this.formControl.errors[errorNames]
        }
      }
    });
  }

  /*ngOnChanges() {
   if (this.nhClearErrorOnChange) {
   this.el = this.elementRef.nativeElement.querySelector('input');
   let errorNames: string[] = this.nhClearErrorOnChange.split(',');
   for (let i = 0; i < errorNames.length; i++) {
   console.log(errorNames[i]);
   }
   }
   }*/
}
