import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessageNotAdminComponent } from './components/message-not-admin/message-not-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing-page',
    pathMatch: 'full'
  },
  {
    path: 'landing-page',
    component: LandingPageComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  }, 
  {
    path: 'dashboard-admin',
    component: DashboardComponent
  },
  {
    path: 'login-page',
    component: LoginPageComponent
  },
  {
    path: 'error-not-admin',
    component: MessageNotAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
