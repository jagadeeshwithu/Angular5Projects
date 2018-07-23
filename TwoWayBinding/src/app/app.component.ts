import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // private ABC: string = "Some Value";
  private PQR: string = "Parent Default PQR";

  constructor() {
    console.log("Inside Parent (constructor): ", this.PQR);
  }

  // handleDEF(DEF: string) {

  //   console.log("Parent component received output from Child: '" , DEF , "'");
  // }

  // handlePQR(PQR: string) {
  //   console.log("Inside Parent (handlePQR): ", PQR);
  //   this.PQR = PQR;
  // }
}
