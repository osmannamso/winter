import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Reviewer} from '../../../shared/interfaces/reviewer';
import {take} from 'rxjs/operators';
import {SiteDataService} from '../../../services/site-data.service';
import {HowWorksItem} from '../../../shared/interfaces/how-works-item';
import {MatDialog} from '@angular/material/dialog';
import {AuthModalComponent} from '../../../shared/modals/auth-modal/auth-modal.component';
import {UserService} from '../../../services/user.service';
import {Router} from '@angular/router';
import {FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {LANDING_REQUEST_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';
import {RegRequestComponent} from '../reg-request/reg-request.component';

declare var ymaps: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  reviewers: Array<Reviewer>;
  requestForm: FormGroup;
  howWorkItems: Array<HowWorksItem>;

  constructor(
    private siteDataService: SiteDataService,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router,
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
}
