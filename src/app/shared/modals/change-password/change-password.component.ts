import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MobilePagesService} from '../../../../../projects/mobile/src/app/services/mobile-pages.service';
import {UserService} from '../../../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MOBILE_PAGES, PASSWORD_CHANGED_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';
import {take} from 'rxjs/operators';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm: FormGroup;

  constructor(
    private mobilePagesService: MobilePagesService,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<ChangePasswordComponent>,
  ) { }

  ngOnInit(): void {
    this.mobilePagesService.setMobilePage(MOBILE_PAGES.CHANGE_PASSWORD);
    this.setChangePasswordForm();
  }

  close(): void {
    this.dialogRef.close();
  }

  setChangePasswordForm(): void {
    this.changePasswordForm = this.userService.getChangePasswordForm();
  }

  changePassword(): void {
    if (this.changePasswordForm.get('new_password').value == this.changePasswordForm.get('repeat_password').value) {
      this.changePasswordForm.setErrors({nomatch: null});
      this.userService.changePassword(this.changePasswordForm)
        .pipe(take(1))
        .subscribe(() => {
          this.changePasswordSuccess();
        }, (err) => {
          this.changePasswordForm.setErrors({unknown: err.error.message});
        });
    } else {
      this.changePasswordForm.setErrors({nomatch: true});
    }
  }

  changePasswordSuccess(): void {
    this.changePasswordForm = this.userService.getChangePasswordForm();
    this.close();
    this.snackBar.open(PASSWORD_CHANGED_SUCCESS, '', {
      duration: 2000,
    });
  }
}
