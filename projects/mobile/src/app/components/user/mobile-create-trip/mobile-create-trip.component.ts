import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';
import {TICKET_CLASSES, TRIP_OPTIONS} from '../../../../../../../src/app/values/variables';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-create-trip',
  templateUrl: './mobile-create-trip.component.html',
  styleUrls: ['./mobile-create-trip.component.scss']
})
export class MobileCreateTripComponent implements OnInit {
  twoWay = false;
  tripOption: TRIP_OPTIONS;
  ticketClass: TICKET_CLASSES;
  step: 1 | 2 | 3 = 1;

  tripOptions = TRIP_OPTIONS;
  ticketClasses = TICKET_CLASSES;

  constructor(
    private mobilePagesService: MobilePagesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_FIRST);
  }

  prevStep(): void {
    this.step -= 1;
    this.changeMobilePage();
  }

  nextStep(): void {
    if (this.step == 3) {
      this.router.navigate(['/user/trips']);
    } else {
      this.step += 1;
    }
    this.changeMobilePage();
  }

  changeMobilePage(): void {
    if (this.step == 1) {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_FIRST);
    } else if (this.step == 2) {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_SECOND);
    } else {
      this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_TRIP_THIRD);
    }
  }
}
