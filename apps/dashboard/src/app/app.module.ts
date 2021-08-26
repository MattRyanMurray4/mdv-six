import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { WildernessComponent } from './wilderness/wilderness.component';
import { WildernessListComponent } from './wilderness/wilderness-list/wilderness-list.component';
import { WildernessDetailsComponent } from './wilderness/wilderness-details/wilderness-details.component';
import { RoutingModule } from './routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, WildernessComponent, WildernessListComponent, WildernessDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
