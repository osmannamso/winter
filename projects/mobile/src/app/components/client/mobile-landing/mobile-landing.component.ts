import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Reviewer} from '../../../../../../../src/app/shared/interfaces/reviewer';
import {HowWorksItem} from '../../../../../../../src/app/shared/interfaces/how-works-item';
import {take} from 'rxjs/operators';
import {AuthModalComponent} from '../../../../../../../src/app/shared/modals/auth-modal/auth-modal.component';
import {SiteDataService} from '../../../../../../../src/app/services/site-data.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {Router} from '@angular/router';
import {LANDING_REQUEST_SUCCESS} from '../../../values/variables';
import {FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {RegRequestComponent} from '../../../../../../../src/app/components/client/reg-request/reg-request.component';

declare var ymaps: any;

@Component({
  selector: 'app-mobile-landing',
  templateUrl: './mobile-landing.component.html',
  styleUrls: ['./mobile-landing.component.scss']
})
export class MobileLandingComponent implements OnInit, AfterViewInit {
  requestForm: FormGroup;
  reviewers: Array<Reviewer>;
  howWorkItems: Array<HowWorksItem>;

  constructor(
    private siteDataService: SiteDataService,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
    private modal: MatDialog
  ) { }

  ngOnInit(): void {
    this.getSiteData();
    this.requestForm = this.siteDataService.getRequestForm();
  }

  ngAfterViewInit(): void {
    ymaps.ready(() => {
      const myMap = new ymaps.Map('YMapsID', {
        center: [43.238293, 76.921776],
        zoom: 13
      });
      const MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      );
      const placemark = new ymaps.Placemark([43.238293, 76.921776], {
        balloonContent: 'Здесь мы'
      }, {
        iconLayout: 'default#imageWithContent',
        // Custom image for the placemark icon.
        iconImageHref: '/assets/icons/placemark.svg',
        // The size of the placemark.
        iconImageSize: [48, 48],
        /**
         * The offset of the upper left corner of the icon relative
         * to its "tail" (the anchor point).
         */
        iconImageOffset: [-24, -24],
        // Offset of the layer with content relative to the layer with the image.
        iconContentOffset: [15, 15],
        // Content layout.
        iconContentLayout: MyIconContentLayout
      });
      myMap.geoObjects.add(placemark);
    });

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

  openAuthModal(): void {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['/user/trips']);
    } else {
      this.dialog.open(AuthModalComponent);
    }
  }

  scrollToRequest(): void {
    this.modal.open(RegRequestComponent);
  }

  createRequest(): void {
    this.requestForm.markAllAsTouched();
    if (this.requestForm.valid) {
      this.siteDataService.createRequest(this.requestForm)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open(LANDING_REQUEST_SUCCESS, '', {
            duration: 2000,
          });
          this.requestForm = this.siteDataService.getRequestForm();
        });
    }
  }
}
