import { Component, OnInit } from '@angular/core';
import {MobilePagesService} from '../../../services/mobile-pages.service';
import {MOBILE_PAGES, PASSWORD_CHANGED_SUCCESS} from '../../../values/variables';
import {UserService} from '../../../../../../../src/app/services/user.service';
import {FormGroup} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-mobile-change-password',
  templateUrl: './mobile-change-password.component.html',
  styleUrls: ['./mobile-change-password.component.scss']
})
export class MobileChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_PASSWORD);
    this.setChangePasswordForm();
  }

  setChangePasswordForm(): void {
    this.changePasswordForm = this.userService.getChangePasswordForm();
  }

  changePassword(): void {
    if (this.changePasswordForm.get('new_password').value == this.changePasswordForm.get('repeat_password').value) {
      this.changePasswordForm.setErrors({nomatch: null});
      this.userService.changePassword(this.changePasswordForm)
        .pipe(take(1))
        .subscribe((data) => {
          this.changePasswordSuccess();
        });
    } else {
      this.changePasswordForm.setErrors({nomatch: true});
    }
  }

  changePasswordSuccess(): void {
    this.changePasswordForm = this.userService.getChangePasswordForm();
    this.snackBar.open(PASSWORD_CHANGED_SUCCESS, '', {
      duration: 2000,
    });
  }
}
