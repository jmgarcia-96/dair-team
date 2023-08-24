import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: '¿Por qué nosotros?',
        icon: 'pi pi-fw pi-check-square',
      },
      {
        label: 'Equipo',
        icon: 'pi pi-fw pi-users',
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-ticket',
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-send', //pi-envelope
      },
    ];
  }
}
