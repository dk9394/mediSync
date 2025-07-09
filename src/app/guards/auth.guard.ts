import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { selectUser } from '../store/user/user.selectors';

export const authGuard: CanActivateFn = () => {
	const store = inject(Store);
	const router = inject(Router);

	return store.select(selectUser.isUserLoggedIn).pipe(
		take(1),
		map((isUserLoggedIn) => {
			if (!isUserLoggedIn) {
				router.navigateByUrl('/');
				return false;
			}
			return true;
		})
	);
};
