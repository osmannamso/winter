import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MobileTripsComponent} from '../../components/user/mobile-trips/mobile-trips.component';

const routes: Routes = [
  {path: '', redirectTo: 'trips', pathMatch: 'full'},
  {path: 'trips', component: MobileTripsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MobileUserRoutingModule {}
