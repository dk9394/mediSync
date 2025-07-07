import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {
	ApplicationConfig,
	ErrorHandler,
	isDevMode,
	provideZoneChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { provideToastr } from 'ngx-toastr';

import { routes } from './app.routes';
import { apiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { authTokenInterceptor } from './interceptors/auth-token.interceptor';
import { handleErrorInterceptor } from './interceptors/handle-error.interceptor';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';
import { appEffects, appReducers } from './store';

export const appConfig: ApplicationConfig = {
	providers: [
		provideAnimations(),
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(
			routes,
			withInMemoryScrolling({
				scrollPositionRestoration: 'enabled',
				anchorScrolling: 'enabled',
			})
		),
		provideHttpClient(
			withInterceptors([apiPrefixInterceptor, authTokenInterceptor, handleErrorInterceptor])
		),
		provideStore(appReducers),
		provideEffects(appEffects),
		provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
		{
			provide: ErrorHandler,
			useClass: GlobalErrorHandlerService,
		},
		provideToastr({
			// toastComponent: CustomToastComponent,
			closeButton: true,
			timeOut: 5000,
			easing: 'ease-in',
			progressBar: true,
			positionClass: 'toast-top-right',
		}),
	],
};
