import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TripsComponent} from '../../components/user/trips/trips.component';
import {EmployeesComponent} from '../../components/user/employees/employees.component';
import {ReportsComponent} from '../../components/user/reports/reports.component';

const routes: Routes = [
  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: TripsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'reports', component: ReportsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
