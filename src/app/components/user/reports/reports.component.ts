import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {take} from 'rxjs/operators';
import {Report} from '../../../shared/interfaces/report';
import {MEDIA_ROOT} from '../../../../../projects/mobile/src/app/values/variables';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: Array<Report>;
  apiUrl = MEDIA_ROOT;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getReports()
      .pipe(take(1))
      .subscribe((data) => {
        this.reports = data;
      });
  }

}
