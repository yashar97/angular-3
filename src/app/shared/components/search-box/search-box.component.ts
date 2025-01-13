import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
})
export class SearchBoxComponent {

  @Input()
  placeHolder!: string;

  // @ViewChild('txtInput')
  // txtInputEnElhijo!: ElementRef<HTMLInputElement>;

  @Output()
  onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string): void {
    // const mensaje: string = this.txtInputEnElhijo.nativeElement.value;
    this.onValue.emit(value);
  }





}
