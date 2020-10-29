import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-change-company',
  templateUrl: './mobile-change-company.component.html',
  styleUrls: ['./mobile-change-company.component.scss']
})
export class MobileChangeCompanyComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_COMPANY);
  }

}
