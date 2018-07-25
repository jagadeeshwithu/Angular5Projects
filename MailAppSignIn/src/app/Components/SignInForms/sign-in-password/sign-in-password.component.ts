import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in-password',
  templateUrl: './sign-in-password.component.html',
  styleUrls: ['./sign-in-password.component.css', '../../../app.component.css']
})
export class SignInPasswordComponent implements OnInit {

  private signInPasswordForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signInPasswordForm = new FormGroup({
      password: new FormControl(
        null,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      )
    });
  }

  passwordFormSubmit(ev: Event) {
    console.info(this.signInPasswordForm.value);
  }

}
