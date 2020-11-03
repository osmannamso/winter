import {Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ChangePasswordComponent} from '../../shared/modals/change-password/change-password.component';
import {take, takeUntil} from 'rxjs/operators';
import {Notification} from '../../shared/interfaces/notification';
import {CreateUserComponent} from '../../components/user/create-user/create-user.component';
import {ChangeCompanyComponent} from '../../shared/modals/change-company/change-company.component';
import {LocalStorageService} from '../../services/local-storage.service';
import {COMPANY_KEY, USER_KEY} from '../../values/local-storage-keys';
import {Company} from '../../shared/interfaces/company';
import {ReplaySubject} from 'rxjs';
import {User} from '../../shared/interfaces/user';
import {EMPLOYEE_NO_AVATAR, EMPLOYEE_RU_POSITIONS} from '../../values/variables';
import {MEDIA_ROOT} from '../../../../projects/mobile/src/app/values/variables';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  isActiveNotifications = false;
  isActiveWallet = false;
  isActiveSettings = false;
  notifications: Array<Notification>;
  company: Company;
  user: User;
  noAvatar = EMPLOYEE_NO_AVATAR;
  apiUrl = MEDIA_ROOT;
  employeeRuPositions = EMPLOYEE_RU_POSITIONS;

  @ViewChild('notificationDropdown') notificationDropdown: ElementRef;
  @ViewChild('walletDropdown') walletDropdown: ElementRef;
  @ViewChild('settingsDropdown') settingsDropdown: ElementRef;

  destroyed$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private userService: UserService,
    private router: Router,
    private dialog: MatDialog,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
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

  @HostListener('document:click', ['$event'])
  onGlobalClick(event): void {
    if (!this.notificationDropdown.nativeElement.contains(event.target)) {
      this.isActiveNotifications = false;
    }

    if (!this.walletDropdown.nativeElement.contains(event.target)) {
      this.isActiveWallet = false;
    }

    if (!this.settingsDropdown.nativeElement.contains(event.target)) {
      this.isActiveSettings = false;
    }
  }

  toggleNotifications(): void {
    this.isActiveNotifications = !this.isActiveNotifications;
    if (this.isActiveNotifications) {
      this.userService.getNotifications()
        .pipe(take(1))
        .subscribe((data) => {
          this.notifications = data.results;
        });
    }
  }

  toggleWallet(): void {
    this.isActiveWallet = !this.isActiveWallet;
  }

  toggleSettings(): void {
    this.isActiveSettings = !this.isActiveSettings;
  }

  logOut(): void {
    this.router.navigate(['/']).then(() => {
      this.userService.logOut();
    });
  }

  openChangePassword(): void {
    this.dialog.open(ChangePasswordComponent);
  }

  openCreateUser(): void {
    this.dialog.open(CreateUserComponent);
  }

  openCompanyProfile(): void {
    this.dialog.open(ChangeCompanyComponent);
  }

  getCompanyFromStorage(): void {
    this.company = this.localStorage.getItem(COMPANY_KEY);
  }
}
