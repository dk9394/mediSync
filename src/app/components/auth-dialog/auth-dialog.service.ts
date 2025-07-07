import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class AuthDialogService {
	private _authDialog = new BehaviorSubject(false);
	private _createAccount = new BehaviorSubject(false);

	get isOpen$(): Observable<boolean> {
		return this._authDialog.asObservable();
	}

	get isCreateMode$(): Observable<boolean> {
		return this._createAccount.asObservable();
	}

	open(isCreateMode?: boolean): void {
		this._authDialog.next(true);
		this._createAccount.next(isCreateMode ?? false);
	}

	close(): void {
		this._authDialog.next(false);
		this._createAccount.next(false);
	}
}
