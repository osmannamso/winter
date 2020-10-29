import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs';
import {take, tap} from 'rxjs/operators';
import {TOKEN_KEY} from '../../values/local-storage-keys';
import {LocalStorageService} from '../../services/local-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../services/user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private localStorage: LocalStorageService,
    private dialog: MatDialog,
    private injector: Injector
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = {};
    const token = this.localStorage.getItem(TOKEN_KEY);
    if (token) {
      headers['Authorization'] = token;
    }
    const httpHeaders = new HttpHeaders(headers);
    const authReq = req.clone({headers: httpHeaders});

    return next.handle(authReq).pipe(
      tap((event) => {
        }, (err) => {
          if (err instanceof HttpErrorResponse) {
            if (err.status == 401) {
              const authService = this.injector.get(UserService);
              authService.logOut();
            }
          }
        }
      )
    )
  }
}
