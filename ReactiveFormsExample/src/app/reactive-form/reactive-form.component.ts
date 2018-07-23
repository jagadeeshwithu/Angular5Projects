import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IUser } from './reactive-form.interface';


@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  // private user: IUser[];
  private form: FormGroup;

  handleSubmit(ev) {
    // console.log(ev);
    console.log(this.form.value);
    
  }

  constructor() { }

  ngOnInit() {

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      // email: new FormControl('',[Validators.required, Validators.email] )
      email: new FormControl(
        '', 
         [
            Validators.required, 
            Validators.email,
            this.customValidator1ForEmail,
            this.customValidator2ForEmail
          ],
          [
            //Async Validators
          ]
      )
    },
    [this.customValidator1ForGroup]
  )
  }

  customValidator1ForEmail(fc: FormControl): any {
    console.log(fc.value);
    /* checking for Hot Mail Account */
    // False --> valid, true --> invalid
    return {
      "HotMailAccount": false
    };
  }

  customValidator2ForEmail(fc: FormControl): any {
  
    console.warn(fc.value);
    return {
      "NotAGmailAccount" : true 
    };
  }

  customValidator1ForGroup(fg: FormGroup): any {
    let n: string = fg.controls.name.value;
    let e: string = fg.controls.email.value;
    console.info(fg.controls.name.value, fg.controls.email.value);

    if (n === "Jagadeesh" && e === 'jagadeeshwithu@gmail.com'){
      return {
        ComboOfNameAndEmail : true
      }
    }
    else {
      return {
        ComboOfNameAndEmail : false
      }
    }
    
  }
}
