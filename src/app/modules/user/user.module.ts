import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserRoutingModule} from './user-routing.module';
import { TripsComponent } from '../../components/user/trips/trips.component';
import { CreateTripComponent } from '../../shared/modals/create-trip/create-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { EmployeesComponent } from '../../components/user/employees/employees.component';
import { CreateUserComponent } from '../../components/user/create-user/create-user.component';
import { ReportsComponent } from '../../components/user/reports/reports.component';
import { ChangePasswordComponent } from '../../shared/modals/change-password/change-password.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    TripsComponent,
    CreateTripComponent,
    EmployeesComponent,
    CreateUserComponent,
    ReportsComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  exports: []
})
export class UserModule {}
