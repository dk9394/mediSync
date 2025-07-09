import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MyComponent } from './my.component';

describe('MyComponent', () => {
	let component: MyComponent;
	let fixture: ComponentFixture<MyComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [MyComponent, RouterTestingModule],
		}).compileComponents();

		fixture = TestBed.createComponent(MyComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
