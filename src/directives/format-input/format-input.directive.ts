import {Directive, ElementRef, Input, Renderer, AfterViewInit} from '@angular/core';
import {NgControl} from '@angular/forms';
import {AoFormatValue} from '../format-input/format-value/format-value';

@Directive({
    selector: '[nhFormatInput]',
    host: {
        '(blur)': 'onBlur()',
    }
})
export class nhFormatInputDirective {
    el: any;
    @Input() nhFormatInput: string;

    static getFormattedValue(type: string, value: string): string {
        let formattedValue: any = {
            'income': AoFormatValue.formatIncome(value),
            'dob': AoFormatValue.formatDate(value),
            'ssn': AoFormatValue.formatSsn(value),
            'capitalize': AoFormatValue.capitalize(value)

        };
        return formattedValue[type];
    }

    constructor(private elementRef: ElementRef,
                private renderer: Renderer,
                private control: NgControl) {
    }

    onBlur() {
        if (this.control.value) {
            let newValue = nhFormatInputDirective.getFormattedValue(this.nhFormatInput, this.control.value);
            this.control.viewToModelUpdate(newValue);
            this.control.valueAccessor.writeValue(newValue);
            this.control.control.setValue(newValue);
        }
    }
}
