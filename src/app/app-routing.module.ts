import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/hero', pathMatch: 'full' },
  { path: 'hero', component: HeroComponent },
  { path: 'about', component: AboutComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: ServicesComponent },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
    ],
  },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
