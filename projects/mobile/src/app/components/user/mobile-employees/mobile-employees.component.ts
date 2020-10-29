import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';

@Component({
  selector: 'app-mobile-employees',
  templateUrl: './mobile-employees.component.html',
  styleUrls: ['./mobile-employees.component.scss']
})
export class MobileEmployeesComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.EMPLOYEES);
  }

}
