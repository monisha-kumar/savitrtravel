import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us/about-us.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {DestinationsComponent} from './destinations/destinations.component';
import {FaqComponent} from './faq/faq.component';
import {ServicesComponent} from './services/services.component';


const routes: Routes = [
   { path: 'home', component: HomeComponent },              // Home page route
  { path: 'about-us', component: AboutUsComponent },       // About Us page route
  { path: 'questions', component: FaqComponent },       // About Us page route
  { path: 'services', component: ServicesComponent },       // About Us page route
  // { path: 'destinations', component: DestinationsComponent },       // destination component
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
