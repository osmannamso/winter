import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './modules/user/user.component';
import { ClientComponent } from './modules/client/client.component';
import {MobileUserModule} from './modules/user/user.module';
import {MobileClientModule} from './modules/client/client.module';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AuthGuard} from '../../../../src/app/shared/guards/auth.guard';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    NoopAnimationsModule,
    MobileUserModule,
    MobileClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
