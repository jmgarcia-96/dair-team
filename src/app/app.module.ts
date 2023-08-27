import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTabsPipe } from './pipes/filter-tabs.pipe';

import { HomeModule } from './pages/home/home.module';
import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [AppComponent, FilterTabsPipe],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    GeneralModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
