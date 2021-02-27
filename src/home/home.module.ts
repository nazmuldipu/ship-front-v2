import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IndexComponent } from './containers/index/index.component';
import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { HomeComponent } from './home.component';
import { HotelswaveAdvComponent } from './components/hotelswave-adv/hotelswave-adv.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: IndexComponent }],
  },
];

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    NavbarComponent,
    LoginFormComponent,
    HotelswaveAdvComponent,
    RegisterFormComponent,
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)],
})
export class HomeModule {}
