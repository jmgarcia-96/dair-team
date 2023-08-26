import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './home.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    ServicesComponent,
  ],
  imports: [CommonModule, ButtonModule, CarouselModule],
})
export class HomeModule {}
