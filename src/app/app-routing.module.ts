import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { DashboardComponent } from './pages/dashboard-user/dashboard.component';
import { MessageNotAdminComponent } from './components/message-not-admin/message-not-admin.component';
import { DashboardProductComponent } from './pages/dashboard-product/dashboard-product.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-page',
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
    path: 'dashboard-admin-user',
    component: DashboardComponent
  },
  {
    path: 'dashboard-admin-product',
    component: DashboardProductComponent
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
