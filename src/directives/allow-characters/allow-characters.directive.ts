import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[nhAllowCharacters]'
})
export class nhAllowCharactersDirective {

    @Input() nhAllowCharacters: string;

    constructor(private el: ElementRef) {
    }

    @HostListener('keypress', ['$event']) onKeyDown(event: any) {
        let e = <KeyboardEvent> event;
        const allowedCharacters = this.nhAllowCharacters.split('');
        let unicode = event.charCode ? event.charCode : event.keyCode;
        if (unicode === 8 || unicode === 9 || unicode === 13 || unicode === 16) {
            // allow the keypress
            return;
        }
        let char = String.fromCharCode(unicode);
        for (let i = 0; i < allowedCharacters.length; i++) {
            if (char === allowedCharacters[i]) {
                // allow the keypress
                return;
            }
        }
        e.preventDefault();
    }
}
