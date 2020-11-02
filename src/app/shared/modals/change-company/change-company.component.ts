import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormGroup} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {take} from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CHANGE_COMPANY_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';

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
    private snackBar: MatSnackBar
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
        this.snackBar.open(CHANGE_COMPANY_SUCCESS, '', {
          duration: 2000
        });
      });
  }
}
