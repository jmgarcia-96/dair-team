import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './components/services/services.component';
import { FaqComponent } from './components/faq/faq.component';
import { ServicesConstants } from './components/services/services.constants';
import { FaqConstants } from './components/faq/faq.constants';
import { GalleriaModule } from 'primeng/galleria';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    ServicesComponent,
    FaqComponent,
  ],
  providers: [ServicesConstants, FaqConstants],
  imports: [
    CommonModule,
    ButtonModule,
    CarouselModule,
    CardModule,
    AccordionModule,
    GalleriaModule,
  ],
})
export class HomeModule {}
