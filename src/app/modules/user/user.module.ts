import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { TripsComponent } from '../../components/user/trips/trips.component';
import { CreateTripComponent } from '../../shared/modals/create-trip/create-trip.component';
import {FormsModule} from '@angular/forms';
import { EmployeesComponent } from '../../components/user/employees/employees.component';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { ReportsComponent } from '../../components/user/reports/reports.component';

@NgModule({
  declarations: [
    TripsComponent,
    CreateTripComponent,
    EmployeesComponent,
    CreateUserComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports: []
})
export class UserModule {}
