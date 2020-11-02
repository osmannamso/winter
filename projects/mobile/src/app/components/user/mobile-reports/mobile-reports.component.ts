import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MEDIA_ROOT, MOBILE_PAGES} from '../../../values/variables';
import {Report} from '../../../../../../../src/app/shared/interfaces/report';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-mobile-reports',
  templateUrl: './mobile-reports.component.html',
  styleUrls: ['./mobile-reports.component.scss']
})
export class MobileReportsComponent implements OnInit {
  reports: Array<Report>;
  apiUrl = MEDIA_ROOT;

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.REPORTS);
    this.userService.getReports()
      .pipe(take(1))
      .subscribe((data) => {
        this.reports = data;
      });
  }
}
