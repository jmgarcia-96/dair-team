import { Component, OnInit } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { GeneralService } from './general/services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  showLoader: boolean = false;
  constructor(private router: Router, private generalService: GeneralService) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(event.url);
        this.showLoader = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        console.log(event.url);
        setTimeout(() => {
          this.showLoader = false;
        }, 1000);

        let item = this.generalService.items.find(
          (i) => i.routerLink === event.url.split('/')[1]
        );
        if (item) item.styleClass = 'active';
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
