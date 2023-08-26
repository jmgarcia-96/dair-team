import { Component, OnInit } from '@angular/core';
import { ServicesConstants } from '../services.constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq: any[] = [];
  activeElement: any = null;

  constructor(private servicesConstants: ServicesConstants) {
    this.faq = this.servicesConstants.faq;
  }

  ngOnInit(): void {}

  toggleAccordian(event: any, index: any) {
    if (event.target instanceof HTMLAnchorElement) {
      this.configureAccordion(event.target, index);
    } else {
      this.configureAccordion(event.target.offsetParent, index);
    }
  }

  configureAccordion(element: any, index: any) {
    if (this.faq[index].isActive) {
      this.faq[index].isActive = false;
      element.classList.remove('active');
      this.activeElement = null;
    } else {
      this.closePanelOpened();
      this.faq[index].isActive = true;
      this.activeElement = element;
      element.classList.add('active');
    }
    const panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  }

  closePanelOpened() {
    if (this.activeElement) {
      this.faq.forEach((f) => (f.isActive = false));
      const element = this.activeElement;
      element.classList.remove('active');
      this.activeElement.nextElementSibling.style.maxHeight = null;
      this.activeElement = null;
    }
  }
}
