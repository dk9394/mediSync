import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';
import { AboutComponent } from './pages/about/about.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { AppointmentsListComponent } from './pages/appointments-list/appointments-list.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { HomeComponent } from './pages/home/home.component';
import { MyComponent } from './pages/my/my.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
	{ path: '', component: HomeComponent, pathMatch: 'full' },
	{ path: 'doctors', component: DoctorsComponent },
	{ path: 'doctors/:id', component: AppointmentComponent },
	{
		path: 'my',
		component: MyComponent,
		canActivate: [authGuard],
		children: [
			{ path: 'profile', component: ProfileComponent },
			{ path: 'appointments', component: AppointmentsListComponent },
			{ path: '', redirectTo: 'profile', pathMatch: 'full' },
		],
	},
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: '**', redirectTo: '' },
];
