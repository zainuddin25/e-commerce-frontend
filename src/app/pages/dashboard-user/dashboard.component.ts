import { Component } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode'
import { UsersTabelComponent } from 'src/app/components/users-tabel/users-tabel.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    const token: any = localStorage.getItem('accessToken')
    const decode: any = jwtDecode(token)

    // console.log(decode)

    if (token == null) {
      this.router.navigate(['/login-page'])
    }

    if (decode.role[0].name !== 'admin') {
      this.router.navigate(['/error-not-admin'])
    }
  }

}
