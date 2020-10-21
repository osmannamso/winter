import {Component, Inject, OnInit} from '@angular/core';
import {AUTH_STATES} from '../../../values/variables';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthModalData} from '../../interfaces/auth-modal-data';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {
  authState: AUTH_STATES;

  authStates = AUTH_STATES;

  constructor(
    public dialogRef: MatDialogRef<AuthModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AuthModalData
  ) { }

  ngOnInit(): void {
    this.authState = this.data.authState;
  }

  changeAuthState(authState: AUTH_STATES): void {
    if (authState !== this.authState) {
      this.authState = authState;
    }
  }
}
