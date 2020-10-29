import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-create-user',
  templateUrl: './mobile-create-user.component.html',
  styleUrls: ['./mobile-create-user.component.scss']
})
export class MobileCreateUserComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CREATE_USER);
  }

}
