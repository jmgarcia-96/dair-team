import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  items: MenuItem[] = [];
  constructor() {
    this.items = [
      {
        label: 'Inicio',
        routerLink: 'home',
      },
      {
        label: 'Sobre nosotros',
        routerLink: 'about',
      },
      // {
      //   label: 'Equipo',
      //   routerLink: 'team',
      // },
      {
        label: 'Servicios',
        routerLink: 'services',
      },
      {
        label: 'FAQ',
        routerLink: 'faq',
      },
      {
        label: 'Testimonios',
        routerLink: 'testimonials',
      },
      {
        label: 'Contacto',
        routerLink: 'contact',
      },
    ];
  }
}
