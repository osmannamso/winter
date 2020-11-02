import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CustomHttpService} from './custom-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LocalStorageService} from './local-storage.service';
import {TOKEN_KEY} from '../values/local-storage-keys';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private http: CustomHttpService,
    private fb: FormBuilder,
    private localStorage: LocalStorageService
  ) {}

  getLoginForm(): FormGroup {
    return this.fb.group({
      username: '',
      password: ''
    });
  }

  getChangePasswordForm(): FormGroup {
    return this.fb.group({
      old_password: '',
      new_password: '',
      repeat_password: ''
    });
  }

  getChangeCompanyForm(): FormGroup {
    return this.fb.group({
      name: '',
      requisites: ''
    });
  }

  logOut(): void {
    this.localStorage.removeItem(TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.localStorage.getItem(TOKEN_KEY);
  }

  // queries to backend

  login(formGroup: FormGroup): Observable<any> {
    return this.http.post('/accounts/login/', formGroup.getRawValue());
  }

  changePassword(formGroup: FormGroup): Observable<any> {
    return this.http.post('/accounts/change_password/', formGroup.getRawValue());
  }

  getCompany(): Observable<any> {
    return this.http.get('/corp/company/');
  }

  getNotifications(): Observable<any> {
    return this.http.get('/corp/notifications/', {page_size: 1000});
  }

  changeCompany(formGroup: FormGroup): Observable<any> {
    return this.http.post('/corp/company/', formGroup.getRawValue());
  }

  getReports(): Observable<any> {
    return this.http.get('/corp/trip_request/reports/');
  }
}
