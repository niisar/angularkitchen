import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


// directives
import { nhAllowCharactersDirective } from '../directives/allow-characters/allow-characters.directive';
import { nhFormatInputDirective } from '../directives/format-input/format-input.directive';
import { nhFocusDirective } from '../directives/focus/focus.directive';
import { nhClearErrorDirective } from '../directives/clear-error/clear-error.directive';
import { nhDragDropDirective } from '../directives/drag-drop/drag-drop.directive';
import { AllowCharacterComponent } from './allow-character/allow-character.component';
import { FormatInputComponent } from './format-input/format-input.component';

@NgModule({
  declarations: [
    AppComponent,
    nhAllowCharactersDirective,
    nhFocusDirective,
    nhFormatInputDirective,
    nhClearErrorDirective,
    nhDragDropDirective,
    AllowCharacterComponent,
    FormatInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
