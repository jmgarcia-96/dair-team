import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
  // { path: '', redirectTo: '/hero', pathMatch: 'full' },
  // { path: 'hero', component: HeroComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'team', component: TeamComponent },
  // { path: 'services', component: ServicesComponent },
  // {
  //   path: 'products',
  //   component: ProductsComponent,
  //   children: [
  //     {
  //       path: 'detail/:id',
  //       component: ProductDetailComponent,
  //     },
  //   ],
  // },
  // { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
