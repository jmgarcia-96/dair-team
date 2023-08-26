import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];
  responsiveMenuVisible: Boolean = false;
  pageYPosition: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        command: () => {
          this.scroll('hero');
        },
      },
      {
        label: '¿Por qué nosotros?',
        icon: 'pi pi-fw pi-check-square',
        command: () => {
          this.scroll('about');
        },
      },
      {
        label: 'Equipo',
        icon: 'pi pi-fw pi-users',
        command: () => {
          this.scroll('team');
        },
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-ticket',
        command: () => {
          this.scroll('services');
        },
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-send', //pi-envelope
        command: () => {
          this.scroll('contact');
        },
      },
    ];
  }

  scroll(el: any) {
    if (document.getElementById(el)) {
      document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router
        .navigate(['/home'])
        .then(() =>
          document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
        );
    }
    this.responsiveMenuVisible = false;
  }
}
