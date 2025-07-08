import { TestBed } from '@angular/core/testing';

import { provideToastr } from 'ngx-toastr';

import { AppNotificationService } from './app-notification.service';

describe('AppNotificationService', () => {
	let service: AppNotificationService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideToastr()],
		});
		service = TestBed.inject(AppNotificationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
