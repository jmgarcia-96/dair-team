import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './components/products/products.component';
import { FilterTabsPipe } from './pipes/filter-tabs.pipe';
import { SharedModule } from './shared/shared.module';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { FaqComponent } from './components/services/faq/faq.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    FooterComponent,
    ProductsComponent,
    FilterTabsPipe,
    ProductDetailComponent,
    FaqComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    SharedModule,
    ButtonModule,
  ],
  exports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    ContactComponent,
    ProductDetailComponent,
    FaqComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
