import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
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
  pagePosition: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      // {
      //   label: 'Inicio',
      //   icon: 'pi pi-fw pi-home',
      //   styleClass: localStorage.getItem('page') === 'hero' ? 'active' : '',
      //   command: () => {
      //     this.scroll('hero');
      //   },
      // },
      {
        label: '¿Por qué nosotros?',
        icon: 'pi pi-fw pi-check-square',
        styleClass: localStorage.getItem('page') === 'about' ? 'active' : '',
        command: () => {
          this.scroll('about');
        },
      },
      {
        label: 'Equipo',
        icon: 'pi pi-fw pi-users',
        styleClass: localStorage.getItem('page') === 'team' ? 'active' : '',
        command: () => {
          this.scroll('team');
        },
      },
      {
        label: 'Servicios',
        icon: 'pi pi-fw pi-ticket',
        styleClass: localStorage.getItem('page') === 'services' ? 'active' : '',
        command: () => {
          this.scroll('services');
        },
      },
      {
        label: 'Preguntas frecuentes',
        icon: 'pi pi-question-circle',
        styleClass: localStorage.getItem('page') === 'faq' ? 'active' : '',
        command: () => {
          this.scroll('faq');
        },
      },
      {
        label: 'Contacto',
        icon: 'pi pi-fw pi-send', //pi-envelope
        styleClass: localStorage.getItem('page') === 'contact' ? 'active' : '',
        command: () => {
          this.scroll('contact');
        },
      },
    ];
  }

  scroll(el: any) {
    localStorage.setItem('page', el);
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

  activeMenu(event: any) {
    //console.log(event.target.classList);
    console.log(localStorage.getItem('page'));
    // console.log(event);
    // console.log(document.getElementById(localStorage.getItem('page')));
    //event = document.getElementById(localStorage.getItem('page'));
    let node;
    if (event.target.classList.contains('p-submenu-header') == true) {
      node = 'submenu';
    } else if (event.target.tagName === 'SPAN') {
      node = event.target.parentNode.parentNode;
    } else {
      node = event.target.parentNode;
    }
    //console.log(node);
    if (node != 'submenu') {
      let menuitem = document.getElementsByClassName('p-menuitem');
      for (let i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.remove('active');
      }
      node.classList.add('active');
    }
  }
}
