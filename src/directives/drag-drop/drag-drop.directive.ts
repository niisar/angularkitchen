import { Directive, HostListener, HostBinding, EventEmitter, Output, Input } from '@angular/core';

@Directive({
  selector: '[nhDragDrop]'
})
export class nhDragDropDirective {
  @Input() private allowed_extensions: Array<string> = [];
  // @Output() private filesChangeEmiter: EventEmitter<File[]> = new EventEmitter();
  // @Output() private filesInvalidEmiter: EventEmitter<File[]> = new EventEmitter();
  @Output() private filesChangeEmiter: EventEmitter<any> = new EventEmitter();
  @Output() private filesInvalidEmiter: EventEmitter<any> = new EventEmitter();
  @HostBinding('style.background') private background = '#eee';

  constructor() { }

  @HostListener('dragover', ['$event']) public onDragOver(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#999';
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee'
  }

  @HostListener('drop', ['$event']) public onDrop(evt: any) {
    evt.preventDefault();
    evt.stopPropagation();
    this.background = '#eee';
    let files = evt.dataTransfer.files;
    let valid_files: Array<File> = [];
    let invalid_files: Array<File> = [];
    if (files.length > 0) {
      for (let file of files) {
        let ext = file.name.split('.')[file.name.split('.').length - 1];
        if (this.allowed_extensions.lastIndexOf(ext) != -1) {
          valid_files.push(file);
        } else {
          invalid_files.push(file);
        }
      }
      this.filesChangeEmiter.emit(valid_files);
      this.filesInvalidEmiter.emit(invalid_files);
    }
  }
}
