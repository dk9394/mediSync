import { HttpInterceptorFn } from '@angular/common/http';

import { environment } from '../../environments/environment';

export const apiPrefixInterceptor: HttpInterceptorFn = (req, next) => {
	const baseUrl = environment.apiUrl;
	let updatedReq = req.clone(req);

	if (req.url.startsWith('/api')) {
		updatedReq = req.clone({ url: `${baseUrl}${req.url}` });
	}
	console.log(updatedReq.url);
	return next(updatedReq);
};
