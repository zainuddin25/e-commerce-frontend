import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-not-admin',
  templateUrl: './message-not-admin.component.html',
  styleUrls: ['./message-not-admin.component.css']
})
export class MessageNotAdminComponent {

  constructor(private router: Router) {
    setTimeout(() => {
      router.navigate(['/landing-page'])
    }, 3000);
  }
}
