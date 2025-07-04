import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { apiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { appEffects, appReducers } from './store';

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideHttpClient(withInterceptors([apiPrefixInterceptor])),
		provideStore(appReducers),
		provideEffects(appEffects),
	],
};
