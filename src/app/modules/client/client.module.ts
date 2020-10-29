import {NgModule} from '@angular/core';
import {LandingComponent} from '../../components/client/landing/landing.component';
import {CommonModule} from '@angular/common';
import {AuthModalComponent} from '../../shared/modals/auth-modal/auth-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    LandingComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ClientModule {}
