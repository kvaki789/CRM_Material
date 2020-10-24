import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {UserService} from "../service/user.service";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerForm: FormGroup;
  submitted: boolean = false;
invalidPassword: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService:UserService) { }
  onSubmit() {
      this.submitted = true;
      console.log(this.registerForm);
      if (this.registerForm.valid) {
      if(this.registerForm.controls.password.value == this.registerForm.controls.cnfPassword.value){
      this.userService.createUser(this.registerForm.value)
      .subscribe(data =>{
      this.router.navigate(['/login']);
      });
      }
      else{
      this.invalidPassword = true;
      }
      }
      }

  ngOnInit(): void {

  this.registerForm = this.formBuilder.group({
      firstName:['',Validators.required],
       lastName:['',Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      cnfPassword:['',Validators.required]

    });

  }
  }
