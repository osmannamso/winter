import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MobileUserRoutingModule} from './user-routing.module';
import { MobileTripsComponent } from '../../components/user/mobile-trips/mobile-trips.component';
import { MobileCreateTripComponent } from '../../components/user/mobile-create-trip/mobile-create-trip.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MobileEmployeesComponent } from '../../components/user/mobile-employees/mobile-employees.component';
import { MobileCreateUserComponent } from '../../components/user/mobile-create-user/mobile-create-user.component';
import { MobileReportsComponent } from '../../components/user/mobile-reports/mobile-reports.component';
import { MobileNotificationsComponent } from '../../components/user/mobile-notifications/mobile-notifications.component';
import { MobileBalanceComponent } from '../../components/user/mobile-balance/mobile-balance.component';
import { MobileSettingsComponent } from '../../components/user/mobile-settings/mobile-settings.component';
import { MobileChangeCompanyComponent } from '../../components/user/mobile-change-company/mobile-change-company.component';
import { MobileChangePasswordComponent } from '../../components/user/mobile-change-password/mobile-change-password.component';
import { MobileGiveAccessComponent } from '../../components/user/mobile-give-access/mobile-give-access.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [MobileTripsComponent, MobileCreateTripComponent, MobileEmployeesComponent, MobileCreateUserComponent, MobileReportsComponent, MobileNotificationsComponent, MobileBalanceComponent, MobileSettingsComponent, MobileChangeCompanyComponent, MobileChangePasswordComponent, MobileGiveAccessComponent],
  imports: [
    CommonModule,
    MobileUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  exports: []
})
export class MobileUserModule {}
