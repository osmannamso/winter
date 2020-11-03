import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CHANGE_COMPANY_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';
import {COMPANY_KEY} from '../../../values/local-storage-keys';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-change-company',
  templateUrl: './change-company.component.html',
  styleUrls: ['./change-company.component.scss']
})
export class ChangeCompanyComponent implements OnInit {
  changeCompanyForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ChangeCompanyComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.changeCompanyForm = this.userService.getChangeCompanyForm();
  }

  close(): void {
    this.dialogRef.close();
  }

  changeCompany(): void {
    this.userService.changeCompany(this.changeCompanyForm)
      .pipe(take(1))
      .subscribe(() => {
        this.close();
        this.userService.getCompany()
          .pipe(take(1))
          .subscribe((data) => {
            this.localStorage.setItem(COMPANY_KEY, data.results[0]);
            this.userService.companyChanged.next(true);
          });
        this.snackBar.open(CHANGE_COMPANY_SUCCESS, '', {
          duration: 2000
        });
      });
  }
}
