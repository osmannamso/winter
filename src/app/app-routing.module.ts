import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ClientComponent} from './modules/client/client.component';
import {LandingComponent} from './components/client/landing/landing.component';
import {UserComponent} from './modules/user/user.component';
import {AuthGuard} from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: LandingComponent}
    ],
  },
  {path: 'user', component: UserComponent, loadChildren: './modules/user/user.module#UserModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
