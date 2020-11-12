import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SiteDataService} from '../../../services/site-data.service';
import {take} from 'rxjs/operators';
import {LANDING_REQUEST_SUCCESS} from '../../../../../projects/mobile/src/app/values/variables';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reg-request',
  templateUrl: './reg-request.component.html',
  styleUrls: ['./reg-request.component.scss']
})
export class RegRequestComponent implements OnInit {
  requestForm: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private siteDataService: SiteDataService,
    private dialogRef: MatDialogRef<RegRequestComponent>,
  ) { }

  ngOnInit(): void {
    this.requestForm = this.siteDataService.getRequestForm();
  }

  createRequest(): void {
    this.requestForm.markAllAsTouched();
    if (this.requestForm.valid) {
      this.siteDataService.createRequest(this.requestForm)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open(LANDING_REQUEST_SUCCESS, '', {
            duration: 2000,
          });
          this.requestForm = this.siteDataService.getRequestForm();
          this.dialogRef.close();
        });
    }
  }

}
