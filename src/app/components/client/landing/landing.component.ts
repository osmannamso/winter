import { Component, OnInit } from '@angular/core';
import {Reviewer} from '../../../shared/interfaces/reviewer';
import {take} from 'rxjs/operators';
import {SiteDataService} from '../../../services/site-data.service';
import {HowWorksItem} from '../../../shared/interfaces/how-works-item';
import {MatDialog} from '@angular/material/dialog';
import {AuthModalComponent} from '../../../shared/modals/auth-modal/auth-modal.component';
import {AUTH_STATES} from '../../../values/variables';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  reviewers: Array<Reviewer>;
  howWorkItems: Array<HowWorksItem>;
  
  authStates = AUTH_STATES;

  constructor(
    private siteDataService: SiteDataService,
    private dialog: MatDialog
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

  openAuthModal(authState: AUTH_STATES): void {
    this.dialog.open(AuthModalComponent, {
      data: {authState}
    });
  }
}
