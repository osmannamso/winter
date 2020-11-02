import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';
import {Notification} from '../../../../../../../src/app/shared/interfaces/notification';
import {take} from 'rxjs/operators';
import {UserService} from '../../../../../../../src/app/services/user.service';

@Component({
  selector: 'app-mobile-notifications',
  templateUrl: './mobile-notifications.component.html',
  styleUrls: ['./mobile-notifications.component.scss']
})
export class MobileNotificationsComponent implements OnInit {
  notifications: Array<Notification>;

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.NOTIFICATIONS);
    this.userService.getNotifications()
      .pipe(take(1))
      .subscribe((data) => {
        this.notifications = data.results;
      });
  }

}
