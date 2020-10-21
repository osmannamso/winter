import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { AuthModalComponent } from '../shared/modals/auth-modal/auth-modal.component';

@NgModule({
  declarations: [AuthModalComponent],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: []
})
export class UiKitModule {}
