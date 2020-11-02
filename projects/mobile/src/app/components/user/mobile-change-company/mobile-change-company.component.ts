import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {CHANGE_COMPANY_SUCCESS, MOBILE_PAGES} from '../../../values/variables';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_COMPANY);
    this.changeCompanyForm = this.userService.getChangeCompanyForm();
  }

  changeCompany(): void {
    this.userService.changeCompany(this.changeCompanyForm)
      .pipe(take(1))
      .subscribe(() => {
        this.router.navigate(['/user/settings']).then(() => {
          this.snackBar.open(CHANGE_COMPANY_SUCCESS, '', {
            duration: 2000
          });
        });
      });
  }
}
