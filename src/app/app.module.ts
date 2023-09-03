import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterTabsPipe } from './pipes/filter-tabs.pipe';

import { GeneralModule } from './general/general.module';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HeroComponent } from './pages/hero/hero.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { FaqComponent } from './pages/faq/faq.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FaqConstants } from './pages/faq/faq.constants';

@NgModule({
  declarations: [
    AppComponent,
    FilterTabsPipe,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    FaqComponent,
    TestimonialsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GeneralModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    AccordionModule,
    GalleriaModule,
    InputTextModule,
    InputTextareaModule,
  ],
  exports: [],
  providers: [FaqConstants],
  bootstrap: [AppComponent],
})
export class AppModule {}
