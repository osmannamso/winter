import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {take} from 'rxjs/operators';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {LocalStorageService} from '../../../services/local-storage.service';
import {TOKEN_KEY} from '../../../values/local-storage-keys';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private localStorage: LocalStorageService,
    private dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.setLoginForm();
  }

  close(): void {
    this.dialogRef.close();
  }

  setLoginForm(): void {
    this.loginForm = this.userService.getLoginForm();
  }

  login(): void {
    this.userService.login(this.loginForm)
      .pipe(take(1))
      .subscribe((data) => {
        this.loginSuccess(data.token);
      }, (err) => {
        this.loginForm.setErrors({incorrect: err.error.detail});
      });
  }

  loginSuccess(token: string): void {
    this.loginForm.setErrors({incorrect: null});
    this.localStorage.setItem(TOKEN_KEY, token);
    this.router.navigate(['/user/trips']).then(() => {
      this.close();
    });
  }
}
