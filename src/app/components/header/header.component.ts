import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  status: any = "loginMenu"

  onChangeSearch(event : any) {
    console.log(event.target.value)
  }

}
