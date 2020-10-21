import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ClientComponent} from './modules/client/client.component';
import {HttpClientModule} from '@angular/common/http';
import {ClientModule} from './modules/client/client.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {UiKitModule} from './modules/ui-kit.module';

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClientModule,
    NoopAnimationsModule,
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
