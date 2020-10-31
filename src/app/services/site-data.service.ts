import {Injectable} from '@angular/core';
import {Reviewer} from '../shared/interfaces/reviewer';
import {Observable} from 'rxjs';
import {CustomHttpService} from './custom-http.service';
import {HowWorksItem} from '../shared/interfaces/how-works-item';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  constructor(
    private http: CustomHttpService,
    private fb: FormBuilder
  ) {}

  getReviewers(): Observable<Array<Reviewer>> {
    return this.http.getFullUri('/assets/data/reviewers.json');
  }

  getHowWorksItems(): Observable<Array<HowWorksItem>> {
    return this.http.getFullUri('/assets/data/how-works-items.json');
  }

  getRequestForm(): FormGroup {
    return this.fb.group({
      company_name: '',
      name: '',
      phone: '',
      email: ['', Validators.email]
    });
  }

  // http queries

  createRequest(formGroup: FormGroup): Observable<any> {
    return this.http.post('/corp/company_request/', formGroup.getRawValue());
  }
}
