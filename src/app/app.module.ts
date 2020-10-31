import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientComponent} from './modules/client/client.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ClientModule} from './modules/client/client.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {UiKitModule} from './modules/ui-kit.module';
import {UserComponent} from './modules/user/user.component';
import {UserModule} from './modules/user/user.module';
import {AuthGuard} from './shared/guards/auth.guard';
import {MatDialogModule} from '@angular/material/dialog';
import {AuthInterceptor} from './shared/interceptors/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientModule,
    MatDialogModule,
    NoopAnimationsModule,
    UserModule,
    UiKitModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
