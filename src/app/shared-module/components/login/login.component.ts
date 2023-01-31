import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup | undefined;
  isLoading: boolean = false;
  loginFromModal: boolean = false;
  formSubmit:boolean = false;
constructor(
  private formBuilder: FormBuilder,private router:Router) {
  this.formInitializer();
  
}
  
  login() {
    this.router.navigate(['/intervention']);
  }

  formInitializer() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
  }

}
