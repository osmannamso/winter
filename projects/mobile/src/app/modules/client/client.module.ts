import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MobileLandingComponent } from '../../components/client/mobile-landing/mobile-landing.component';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthModalComponent} from '../../../../../../src/app/shared/modals/auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    MobileLandingComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: []
})
export class MobileClientModule {}
