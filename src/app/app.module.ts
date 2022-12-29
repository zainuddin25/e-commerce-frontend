import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SwiperModule } from 'swiper/angular';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
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
import { DashboardProductComponent } from './pages/dashboard-product/dashboard-product.component';
import { ProductTabelComponent } from './components/product-tabel/product-tabel.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { DetailProductsComponent } from './pages/detail-products/detail-products.component';


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
    DashboardProductComponent,
    ProductTabelComponent,
    CardProductComponent,
    DetailProductsComponent,
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
    MatSelectModule,
    MatTooltipModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
