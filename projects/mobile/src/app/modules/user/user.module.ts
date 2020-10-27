import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileUserRoutingModule} from './user-routing.module';
import { MobileTripsComponent } from '../../components/user/mobile-trips/mobile-trips.component';

@NgModule({
  declarations: [MobileTripsComponent],
  imports: [
    CommonModule,
    MobileUserRoutingModule
  ],
  exports: []
})
export class MobileUserModule {}
