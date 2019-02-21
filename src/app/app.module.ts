import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AuthenticationComponent } from './module_user/authentication/authentication.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule }   from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './modules/user/login/login.component';
import { AuthComponent } from './modules/user/login/auth/auth.component';
import { LogoComponent } from './modules/user/login/logo/logo.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './modules/home/home.component';
import { MenubarComponent } from './modules/home/menubar/menubar.component';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes = [
  { 
    path: 'auth-component', 
    component: AuthenticationComponent 
  }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    AuthComponent,
    LogoComponent,
    HomeComponent,
    MenubarComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    HttpModule,
    MatMenuModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule, MatCardModule, MatFormFieldModule, 
    ReactiveFormsModule, FormsModule, MatInputModule,
    BrowserAnimationsModule, MatIconModule, MatGridListModule, MatButtonModule, HttpModule,
    MatMenuModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
