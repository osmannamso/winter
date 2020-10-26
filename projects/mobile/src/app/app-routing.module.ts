import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientComponent} from './modules/client/client.component';
import {MobileLandingComponent} from './components/client/mobile-landing/mobile-landing.component';

const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      {path: '', component: MobileLandingComponent}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
