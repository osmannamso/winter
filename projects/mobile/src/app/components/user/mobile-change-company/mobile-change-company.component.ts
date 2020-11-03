import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {CHANGE_COMPANY_SUCCESS, MOBILE_PAGES} from '../../../values/variables';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';
import {COMPANY_KEY} from '../../../../../../../src/app/values/local-storage-keys';
import {LocalStorageService} from '../../../../../../../src/app/services/local-storage.service';

@Component({
  selector: 'app-mobile-change-company',
  templateUrl: './mobile-change-company.component.html',
  styleUrls: ['./mobile-change-company.component.scss']
})
export class MobileChangeCompanyComponent implements OnInit {
  changeCompanyForm: FormGroup;

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_COMPANY);
    this.changeCompanyForm = this.userService.getChangeCompanyForm();
  }

  changeCompany(): void {
    this.userService.changeCompany(this.changeCompanyForm)
      .pipe(take(1))
      .subscribe(() => {
        this.userService.getCompany()
          .pipe(take(1))
          .subscribe((data) => {
            this.localStorage.setItem(COMPANY_KEY, data.results[0]);
            this.userService.companyChanged.next(true);
          });
        this.router.navigate(['/user/settings']).then(() => {
          this.snackBar.open(CHANGE_COMPANY_SUCCESS, '', {
            duration: 2000
          });
        });
      });
  }
}
