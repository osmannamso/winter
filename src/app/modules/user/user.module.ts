import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { TripsComponent } from '../../components/user/trips/trips.component';

@NgModule({
  declarations: [
    TripsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: []
})
export class UserModule {}
