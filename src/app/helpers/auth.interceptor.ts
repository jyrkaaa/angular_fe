import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {catchError, switchMap, throwError} from 'rxjs';

export const authInterceptor : HttpInterceptorFn = (req, next) => {
  {
    const authService = inject(AuthService);
    const token =authService.getToken() ?? '';
    const authRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(authRequest).pipe(
      catchError(error => {
        if (error.status === 401) {
          return authService.refreshToken().pipe(
            switchMap(res => {
              const newToken = res?.Token;
              if (newToken) {
                const retryRequest = req.clone({
                  setHeaders: {
                    Authorization: `Bearer ${newToken}`
                  }
                });
                return next(retryRequest);
              }
              return throwError(() => error);
            })
          );
        }
        return throwError(() => error);
      })
    );
  }
}
