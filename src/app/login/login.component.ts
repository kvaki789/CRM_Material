import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../model/user.model";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  invalidLogin = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }

  onSubmit(): void {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    // const response = this.ValidatingUser(this.loginForm.controls.email.value);
    // if (response) {
    //   if (this.loginForm.controls.password.value === 'password') {
    //     this.router.navigate(['list-user']);
    //   }
    //   else {
    //     this.invalidLogin = true;
    //   }
    // }
    // else {
    //   this.invalidLogin = true;
    // }

    this.userService.getUsers().subscribe(users => {
      console.log(users);
      const user = users.find(x => {
        return x.email === this.loginForm.controls.email.value;
      });
      if (user) {
          if (this.loginForm.controls.password.value === 'password') {
            this.router.navigate(['list-user']);
          }
          else {
            this.invalidLogin = true;
          }
      }
      else {
        this.invalidLogin = true;
      }
    });

  }
  ValidatingUser(email): void {

    // this.userService.getUsers().subscribe(users => {
    //   console.log(users);
    //   const user = users.find(x => {
    //     return x.email === this.loginForm.controls.email.value;
    //   });
    //   if (user) {
    //       if (this.loginForm.controls.password.value === 'password') {
    //         this.router.navigate(['list-user']);
    //       }
    //       else {
    //         this.invalidLogin = true;
    //       }
    //     return true;
    //   }
    //   else {
    //     this.invalidLogin = true;
    //     return false;
    //   }
    // });


  }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
