import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-notifications',
  templateUrl: './mobile-notifications.component.html',
  styleUrls: ['./mobile-notifications.component.scss']
})
export class MobileNotificationsComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.NOTIFICATIONS);
  }

}
