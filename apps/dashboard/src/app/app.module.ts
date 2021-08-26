import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PredatorDetailsComponent } from './predators/predator-details/predator-details.component';
import { PredatorsListComponent } from './predators/predators-list/predators-list.component';
import { PredatorsComponent } from './predators/predators.component';
import { RoutingModule } from './routing.module';
import { MaterialModule } from '@animals/material';
import { UiLibraryModule } from '@animals/ui-library';
import { CoreStateModule } from '@animals/core-state';
import { CoreDataModule } from '@animals/core-data';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PredatorsComponent,
    PredatorsListComponent,
    PredatorDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiLibraryModule,
    CoreStateModule,
    CoreDataModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
