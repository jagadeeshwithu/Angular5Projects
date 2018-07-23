import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent /*implements OnInit*/ {

  @Input() 
  @Output()
  private pqr: string;
  // @Input('inputABC') private ABC: string;
  // @Output('onDEFEvent') private DEFEventEmitter: EventEmitter<string>;
  // @ViewChild('inputRef') private inputTextElement: HTMLInputElement;

  //  private PQR: string;
  // @Output('pqr') private PQREventEmitter: EventEmitter<string>;

  // private counter: number = 0;
  // private _checkBoxCount: number = 0;
  // private checkBoxItems: Array<boolean> = [];
  // private _PQR: string = 'child PQR';
  
  // constructor() { 
  //   // console.log("Inside Child (constructor): ");
  //   // this.DEFEventEmitter = new EventEmitter<string> ();
  //   // this.PQREventEmitter = new EventEmitter<string> ();
  //   // console.log("Inside the constructor: ", this.inputTextElement);
  // }

  // ngOnInit() {
  //   // console.log("Inside Child (ngOnInit): ", this.PQR);
  //   // console.log("Child component received Input from parent: ", this.ABC);
  //   // console.log("Inside the ngOnInit hook: ", this.inputTextElement);

  // }

  // @Input('pqr')
  // set PQR(someval: string) {
  //   console.log("Inside Child: (setter PQR)"," setting value to: ", someval);
  //   this._PQR = someval;
  //   this.PQREventEmitter.emit(someval);
  // }

  // get PQR(): string {
  //   console.log("Inside Child: (getter PQR)", " returning value: ", this._PQR);
  //   return this._PQR;
  // }

  // set checkBoxCount(countvalue: number) {
  //   this._checkBoxCount = countvalue;
  //   this.checkBoxItems = new Array<boolean>(countvalue);
  // }

  // get checkBoxCount(): number {
  //   return this._checkBoxCount;
  // }

  handleClickInChild(ev: MouseEvent) {
    
    this.pqr = "Child value PQR";
    // this.checkBoxCount = parseInt(this.inputTextElement['nativeElement'].value) || 0;

    // this.counter++;
    // if (this.counter % 5 === 0) {
    //   this.DEFEventEmitter.emit("String emitted from Child");
    // }
  }

}
