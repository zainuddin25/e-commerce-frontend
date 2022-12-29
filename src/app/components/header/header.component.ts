import { Component } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  username: string = ''
  photo_profile: string = ''
  dashbaordLink: string = ''
  visibilityIcon: string = ''

  ngOnInit() {
    const token : any = localStorage.getItem('accessToken')
    const decode : any = jwtDecode(token)
    this.photo_profile = decode.photo_profile
    this.username = decode.username
    // console.log(decode.role[0].name)
    if (decode.role[0].name === 'user') {
      this.visibilityIcon = 'hidden'
    }
  }

}
