import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ContactConstants } from './contact.constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [
    trigger('fade', [
      state('false', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      transition('false => true', animate('2000ms ease-in')),
      transition('true => false', animate('2000ms ease-out')),
    ]),
  ],
  providers: [ContactConstants],
})
export class ContactComponent implements OnInit {
  infoList: any[] = [];

  constructor(
    private contactConstants: ContactConstants,
    private titleService: Title
  ) {
    this.titleService.setTitle('Contacto - DGLTrainer');
    this.infoList = this.contactConstants.infoList;
  }

  ngOnInit(): void {}
}
