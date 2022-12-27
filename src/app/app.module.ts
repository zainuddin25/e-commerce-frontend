import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { DashboardComponent } from './pages/dashboard-user/dashboard.component';
import { MessageNotAdminComponent } from './components/message-not-admin/message-not-admin.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UsersTabelComponent } from './components/users-tabel/users-tabel.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { BottomSheetRoleOptionComponent } from './components/bottom-sheet-role-option/bottom-sheet-role-option.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    LoginPageComponent,
    ListCategoryComponent,
    ListCategoryComponent,
    DashboardComponent,
    MessageNotAdminComponent,
    SideBarComponent,
    UsersTabelComponent,
    HeaderAdminComponent,
    BottomSheetRoleOptionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
