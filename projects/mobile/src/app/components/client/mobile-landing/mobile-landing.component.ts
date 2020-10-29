import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Reviewer} from '../../../../../../../src/app/shared/interfaces/reviewer';
import {HowWorksItem} from '../../../../../../../src/app/shared/interfaces/how-works-item';
import {take} from 'rxjs/operators';
import {AuthModalComponent} from '../../../../../../../src/app/shared/modals/auth-modal/auth-modal.component';
import {SiteDataService} from '../../../../../../../src/app/services/site-data.service';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {Router} from '@angular/router';

declare var ymaps: any;

@Component({
  selector: 'app-mobile-landing',
  templateUrl: './mobile-landing.component.html',
  styleUrls: ['./mobile-landing.component.scss']
})
export class MobileLandingComponent implements OnInit, AfterViewInit {
  reviewers: Array<Reviewer>;
  howWorkItems: Array<HowWorksItem>;

  constructor(
    private siteDataService: SiteDataService,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getSiteData();
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
        iconImageHref: '/assets/images/logo-placemark.png',
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
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }
}
