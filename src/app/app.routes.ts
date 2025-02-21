import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DestinationsComponent} from './destinations/destinations.component';
import {FaqComponent} from './faq/faq.component';
import {ServicesComponent} from './services/services.component';

export const routes: Routes = [  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Default route to login
  { path: 'login', component: LoginComponent },            // Login page route
  { path: 'home', component: HomeComponent },              // Home page route
  { path: 'about-us', component: AboutUsComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'questions', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
];
