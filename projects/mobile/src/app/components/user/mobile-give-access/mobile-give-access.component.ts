import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-give-access',
  templateUrl: './mobile-give-access.component.html',
  styleUrls: ['./mobile-give-access.component.scss']
})
export class MobileGiveAccessComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.GIVE_ACCESS);
  }

}
