import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TripsComponent} from '../../components/user/trips/trips.component';

const routes: Routes = [
  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: TripsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
