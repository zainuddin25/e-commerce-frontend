import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  passwordType: string = 'password'
  formGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(
    private router: Router,
    private http: HttpClient
  ) {}

  passwordVisibility() {
    if (this.passwordType == 'password') {
      this.passwordType = 'text'
    } else if(this.passwordType == 'text') {
      this.passwordType = 'password'
    }
  }

  loginButton() {
    this.http.post<any>('http://localhost:3222/auth/login', {
      username: this.formGroup.value.username,
      password: this.formGroup.value.password
    })
    .subscribe(
      value => {
        localStorage.setItem('accessToken', value.accessToken)
        const decode: any = jwtDecode(value.accessToken)
        if (decode.role[0].name === 'admin') {
          this.router.navigate(['/dashboard-admin-user'])
        } else if(decode.role[0].name === 'user') {
          this.router.navigate(['/landing-page'])
        }
      },
      error => {
        alert(error.error.message)
      }
    )
  }
}
