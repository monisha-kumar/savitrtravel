import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {ModalComponent} from './modal/modal.component';



@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    ModalComponent,
  ],
  providers: [],
  bootstrapApplication: [AppComponent]
})
export class AppModule { }
