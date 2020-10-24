import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/auth.service";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;

  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router,
  private authService: AuthenticationService, private userService:UserService) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    let response=this.ValidatingUser(this.loginForm.controls.email.value)
    if(response){
    if( this.loginForm.controls.password.value == 'password') {
    this.router.navigate(['list-user']);
    }
    else{
    this.invalidLogin = true;
    }
    }
    else{
    this.invalidLogin = true;
    }


  }
  ValidatingUser(email) {

  let users:User[];
this.userService.getUsers().subscribe(y=>{
  users=y;
  console.log(users);
  })
  let user=users.find(x=>{
  return x.email===email;
  })
  if(user){
  return true
  }
  else {
  return false
  }

  }

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
