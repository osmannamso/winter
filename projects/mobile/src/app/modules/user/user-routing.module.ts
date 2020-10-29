import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MobileTripsComponent} from '../../components/user/mobile-trips/mobile-trips.component';
import {MobileCreateTripComponent} from '../../components/user/mobile-create-trip/mobile-create-trip.component';
import {MobileEmployeesComponent} from '../../components/user/mobile-employees/mobile-employees.component';
import {MobileCreateUserComponent} from '../../components/user/mobile-create-user/mobile-create-user.component';
import {MobileReportsComponent} from '../../components/user/mobile-reports/mobile-reports.component';
import {MobileNotificationsComponent} from '../../components/user/mobile-notifications/mobile-notifications.component';
import {MobileBalanceComponent} from '../../components/user/mobile-balance/mobile-balance.component';
import {MobileSettingsComponent} from '../../components/user/mobile-settings/mobile-settings.component';
import {MobileChangeCompanyComponent} from '../../components/user/mobile-change-company/mobile-change-company.component';
import {MobileChangePasswordComponent} from '../../components/user/mobile-change-password/mobile-change-password.component';
import {MobileGiveAccessComponent} from '../../components/user/mobile-give-access/mobile-give-access.component';

const routes: Routes = [
  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: MobileTripsComponent},
  {path: 'trips/create', component: MobileCreateTripComponent},
  {path: 'employees', component: MobileEmployeesComponent},
  {path: 'employees/create', component: MobileCreateUserComponent},
  {path: 'reports', component: MobileReportsComponent},
  {path: 'notifications', component: MobileNotificationsComponent},
  {path: 'balance', component: MobileBalanceComponent},
  {path: 'settings', component: MobileSettingsComponent},
  {path: 'change-company', component: MobileChangeCompanyComponent},
  {path: 'change-password', component: MobileChangePasswordComponent},
  {path: 'give-access', component: MobileGiveAccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileUserRoutingModule {}
