import {Component, OnDestroy, OnInit} from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MEDIA_ROOT, MOBILE_PAGES} from '../../../values/variables';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {Router} from '@angular/router';
import {Company} from '../../../../../../../src/app/shared/interfaces/company';
import {User} from '../../../../../../../src/app/shared/interfaces/user';
import {EMPLOYEE_NO_AVATAR, EMPLOYEE_RU_POSITIONS} from '../../../../../../../src/app/values/variables';
import {takeUntil} from 'rxjs/operators';
import {COMPANY_KEY, USER_KEY} from '../../../../../../../src/app/values/local-storage-keys';
import {ReplaySubject} from 'rxjs';
import {LocalStorageService} from '../../../../../../../src/app/services/local-storage.service';

@Component({
  selector: 'app-mobile-settings',
  templateUrl: './mobile-settings.component.html',
  styleUrls: ['./mobile-settings.component.scss']
})
export class MobileSettingsComponent implements OnInit, OnDestroy {
  company: Company;
  user: User;
  noAvatar = EMPLOYEE_NO_AVATAR;
  apiUrl = MEDIA_ROOT;
  employeeRuPositions = EMPLOYEE_RU_POSITIONS;

  destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.SETTINGS);
    this.userService.companyChanged
      .pipe(takeUntil(this.destroyed$))
      .subscribe(() => {
        this.getCompanyFromStorage();
      });
    this.user = this.localStorage.getItem(USER_KEY);
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

  logOut() {
    this.router.navigate(['/']).then(() => {
      this.userService.logOut();
    });
  }

  getCompanyFromStorage(): void {
    this.company = this.localStorage.getItem(COMPANY_KEY);
  }
}
