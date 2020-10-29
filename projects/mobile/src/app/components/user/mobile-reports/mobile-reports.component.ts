import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-reports',
  templateUrl: './mobile-reports.component.html',
  styleUrls: ['./mobile-reports.component.scss']
})
export class MobileReportsComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.REPORTS);
  }

}
