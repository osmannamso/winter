import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-balance',
  templateUrl: './mobile-balance.component.html',
  styleUrls: ['./mobile-balance.component.scss']
})
export class MobileBalanceComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    const mobilePage = Object.assign({}, MOBILE_PAGES.BALANCE);
    mobilePage.text += '28 000 ТГ';
    this.mobilePagesService.setMobilePage(mobilePage);
  }

}
