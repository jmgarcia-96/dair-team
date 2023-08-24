import { Component, OnInit } from '@angular/core';
import { ServicesConstants } from './services.constants';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [ServicesConstants],
})
export class ServicesComponent implements OnInit {
  services: any[] = [];

  constructor(private servicesConstants: ServicesConstants) {
    this.services = this.servicesConstants.services;
  }

  ngOnInit(): void {}
}
