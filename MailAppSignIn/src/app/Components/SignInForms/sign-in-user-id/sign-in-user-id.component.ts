import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in-user-id',
  templateUrl: './sign-in-user-id.component.html',
  styleUrls: ['./sign-in-user-id.component.css', '../../../app.component.css']
})

export class SignInUserIdComponent implements OnInit {

  private signInUserForm : FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInUserForm = new FormGroup({
      email: new FormControl(
        null,
        [
          Validators.required,
          Validators.email
        ]
      )
    });

  }

  userFormSubmit(ev: Event) {
    // console.info(ev.value);
    console.info(this.signInUserForm.value);
    // ev.preventDefault();
  }
}
