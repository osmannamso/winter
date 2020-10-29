import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES} from '../../../values/variables';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mobile-settings',
  templateUrl: './mobile-settings.component.html',
  styleUrls: ['./mobile-settings.component.scss']
})
export class MobileSettingsComponent implements OnInit {

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.SETTINGS);
  }

  logOut() {
    this.router.navigate(['/']).then(() => {
      this.userService.logOut();
    });
  }
}
