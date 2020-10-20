import {Injectable} from '@angular/core';
import {Reviewer} from '../shared/interfaces/reviewer';
import {Observable} from 'rxjs';
import {CustomHttpService} from './custom-http.service';
import {HowWorksItem} from '../shared/interfaces/how-works-item';

@Injectable({
  providedIn: 'root'
})
export class SiteDataService {
  constructor(
    private http: CustomHttpService
  ) {}

  getReviewers(): Observable<Array<Reviewer>> {
    return this.http.getFullUri('/assets/data/reviewers.json');
  }

  getHowWorksItems(): Observable<Array<HowWorksItem>> {
    return this.http.getFullUri('/assets/data/how-works-items.json');
  }
}
