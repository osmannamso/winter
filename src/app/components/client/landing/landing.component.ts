import { Component, OnInit } from '@angular/core';
import {Reviewer} from '../../../shared/interfaces/reviewer';
import {take} from 'rxjs/operators';
import {SiteDataService} from '../../../services/site-data.service';
import {HowWorksItem} from '../../../shared/interfaces/how-works-item';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  reviewers: Array<Reviewer>;
  howWorkItems: Array<HowWorksItem>;

  constructor(
    private siteDataService: SiteDataService
  ) { }

  ngOnInit(): void {
    this.getSiteData();
  }

  getSiteData(): void {
    this.siteDataService.getReviewers()
      .pipe(take(1))
      .subscribe((data) => {
        this.reviewers = data;
      });
    this.siteDataService.getHowWorksItems()
      .pipe(take(1))
      .subscribe((data) => {
        this.howWorkItems = data;
      });
  }
}
