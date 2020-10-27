import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './modules/client/client.component';
import {MobileLandingComponent} from './components/client/mobile-landing/mobile-landing.component';
import {AuthGuard} from '../../../../src/app/shared/guards/auth.guard';
import {UserComponent} from './modules/user/user.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: MobileLandingComponent}
    ],
  },
  {path: 'user', component: UserComponent, loadChildren: './modules/user/user.module#MobileUserModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
