import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-trips',
  templateUrl: './mobile-trips.component.html',
  styleUrls: ['./mobile-trips.component.scss']
})
export class MobileTripsComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.TRIPS);
  }

}
