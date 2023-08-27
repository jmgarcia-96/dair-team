import { Component, OnInit } from '@angular/core';
import { FaqConstants } from './faq.constants';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq: any[] = [];
  activeElement: any = null;

  constructor(private faqConstants: FaqConstants) {
    this.faq = this.faqConstants.faq;
  }

  ngOnInit(): void {}
}
