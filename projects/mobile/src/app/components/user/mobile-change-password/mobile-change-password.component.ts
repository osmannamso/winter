import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-change-password',
  templateUrl: './mobile-change-password.component.html',
  styleUrls: ['./mobile-change-password.component.scss']
})
export class MobileChangePasswordComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_PASSWORD);
  }

}
