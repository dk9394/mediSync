import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeService } from '../../services/home.service';
import { DoctorsComponent } from './doctors.component';

describe('DoctorsComponent', () => {
	let component: DoctorsComponent;
	let fixture: ComponentFixture<DoctorsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DoctorsComponent, RouterTestingModule, HttpClientTestingModule],
			providers: [HomeService],
		}).compileComponents();

		fixture = TestBed.createComponent(DoctorsComponent);
		component = fixture.componentInstance;
		TestBed.inject(HomeService);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
