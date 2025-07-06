import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthDialogService {
	private _authDialog = new BehaviorSubject(false);

	get isOpen$(): Observable<boolean> {
		return this._authDialog.asObservable();
	}

	open(): void {
		this._authDialog.next(true);
	}

	close(): void {
		this._authDialog.next(false);
	}
}
