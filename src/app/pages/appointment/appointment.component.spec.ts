import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { provideToastr } from 'ngx-toastr';

import { AppointmentComponent } from './appointment.component';
import { AppointmentService } from './appointment.service';

describe('AppointmentComponent', () => {
	let component: AppointmentComponent;
	let fixture: ComponentFixture<AppointmentComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppointmentComponent, RouterTestingModule],
			providers: [provideMockStore(), AppointmentService, provideToastr()],
		}).compileComponents();

		fixture = TestBed.createComponent(AppointmentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
