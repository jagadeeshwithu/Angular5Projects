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
      email: new FormControl('',[Validators.required, Validators.email] )
    })
  }

}
