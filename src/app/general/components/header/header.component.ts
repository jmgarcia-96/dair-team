import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
} from '@angular/router';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  responsiveMenuVisible: Boolean = false;
  pagePosition: string = '';

  constructor(public generalService: GeneralService) {}

  ngOnInit() {}

  // scroll(el: any) {
  //   localStorage.setItem('page', el);
  //   if (document.getElementById(el)) {
  //     document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' });
  //   } else {
  //     this.router
  //       .navigate(['/home'])
  //       .then(() =>
  //         document.getElementById(el)?.scrollIntoView({ behavior: 'smooth' })
  //       );
  //   }
  //   this.responsiveMenuVisible = false;
  // }

  activeMenu(event: any) {
    let node;
    if (event.target.classList.contains('p-submenu-header') == true) {
      node = 'submenu';
    } else if (event.target.tagName === 'SPAN') {
      node = event.target.parentNode.parentNode;
    } else {
      node = event.target.parentNode;
    }
    if (node != 'submenu') {
      let menuitem = document.getElementsByClassName('p-menuitem');
      for (let i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.remove('active');
      }
      node.classList.add('active');
    }
  }
}
