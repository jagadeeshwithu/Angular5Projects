import { Component } from '@angular/core';
import { NgForm, NgModel } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'tdf-component',
  templateUrl: './template-driven-form-component.component.html',
  styleUrls: ['./template-driven-form-component.component.css']
})
export class TemplateDrivenFormComponentComponent {
  handleSubmit(event: Event, formRef: NgForm ): void {
      console.log(event, formRef);
      // console.log(formRef.controls.name.value, formRef.controls.email.value);

      for (let formControlName in formRef.controls) {
          console.info(formControlName, ": ", formRef.controls[formControlName].value);
      }
      
  }
}
