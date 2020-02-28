import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  get loginControl() { return this.loginForm.controls; }

}
