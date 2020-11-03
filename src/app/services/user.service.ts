import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {CustomHttpService} from './custom-http.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LocalStorageService} from './local-storage.service';
import {COMPANY_KEY, TOKEN_KEY} from '../values/local-storage-keys';
import {Company} from '../shared/interfaces/company';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  companyChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

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
    const company: Company = this.localStorage.getItem(COMPANY_KEY);
    return this.fb.group({
      name: company.name,
      requisites: company.requisites
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
    return this.http.put(`/corp/company/${this.localStorage.getItem(COMPANY_KEY).id}/`, formGroup.getRawValue());
  }

  getReports(): Observable<any> {
    return this.http.get('/corp/trip_request/reports/');
  }
}
