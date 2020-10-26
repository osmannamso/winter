import {NgModule} from '@angular/core';
import {LandingComponent} from '../../components/client/landing/landing.component';
import {CommonModule} from '@angular/common';
import {AuthModalComponent} from '../../shared/modals/auth-modal/auth-modal.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    LandingComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: []
})
export class ClientModule {}
