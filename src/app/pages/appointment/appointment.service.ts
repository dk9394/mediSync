import { Injectable } from '@angular/core';

export interface IBookingSlot {
	day: string;
	date: number;
	hours: string[];
	slotDate: string;
	slotTime: string;
}

// function isValidSlotDate(str: string): str is SlotDateString {
// 	return /^(\d{1,2})_(\d{1,2})_(\d{4})$/.test(str);
// }

@Injectable({
	providedIn: 'root',
})
export class AppointmentService {
	private advanceBookingDays = 7;
	private weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
	private slotDateRegEx = /^(\d{1,2})_(\d{1,2})_(\d{4})$/;
	private openSlotHours = [
		{ start: '9:00', end: '13:00' },
		{ start: '16:00', end: '20:00' },
	];

	getBookingSlots(): IBookingSlot[] {
		const bookings: IBookingSlot[] = [];
		const today = new Date();

		for (let i = 1; i <= this.advanceBookingDays; i++) {
			const futureDate = new Date();
			futureDate.setDate(today.getDate() + i);
			bookings.push({
				day: this.weekDays[futureDate.getDay()],
				date: futureDate.getDate(),
				slotDate: this.slotDate(futureDate),
				hours: this.getBookingHours(),
				slotTime: '',
			});
		}
		return bookings;
	}

	private getBookingHours() {
		const slotDuration = 30;
		return this.openSlotHours
			.map((slot) => this.generateTimeSlots(slot.start, slot.end, slotDuration))
			.flat();
	}

	private slotDate(date: Date): string {
		return `${date.getDate()}_${date.getMonth() + 1}_${date.getFullYear()}`;
	}

	// deCodeSlotDate(bookingSlotDate: IBookingDay): string {
	// 	const currentMonth = new Date().getMonth();
	// 	const currentYear = new Date().getFullYear();
	// 	console.log(`${bookingSlotDate.date}_${currentMonth + 1}_${currentYear}`);
	// 	return `${bookingSlotDate.date}_${currentMonth + 1}_${currentYear}`;
	// }

	private generateTimeSlots(
		bookingStartHour: string,
		bookingEndHour: string,
		slotDuration: number
	): string[] {
		const [startHour, startMinute] = bookingStartHour.split(':').map(Number);
		const [endHour, endMinute] = bookingEndHour.split(':').map(Number);

		const startTime = new Date();
		startTime.setHours(startHour, startMinute, 0);

		const endTime = new Date();
		endTime.setHours(endHour, endMinute, 0);

		const slots: string[] = [];

		while (startTime < endTime) {
			const slot = startTime.toLocaleTimeString('en-US', {
				hour: '2-digit',
				minute: '2-digit',
				hour12: true,
			});
			startTime.setMinutes(startTime.getMinutes() + slotDuration);
			slots.push(slot);
		}

		return slots;
	}
}
