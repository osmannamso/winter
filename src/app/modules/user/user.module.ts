import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { TripsComponent } from '../../components/user/trips/trips.component';
import { CreateTripComponent } from '../../shared/modals/create-trip/create-trip.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    TripsComponent,
    CreateTripComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: []
})
export class UserModule {}
