import { Component, Input, OnInit } from '@angular/core';
import { Config, Item } from '../../models';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  @Input() options = {};
  @Input() items: Item[] = [];
  config: Config = {};

  ngOnInit() {
    this.config = this.mergeConfig(this.options);
  }

  mergeConfig(options: Config) {
    const config = {
      multi: true,
    };

    return { ...config, ...options };
  }

  toggle(index: number) {
    if (!this.config.multi) {
      this.items
        .filter((item, i) => i !== index && item.active)
        .forEach((item) => (item.active = !item.active));
    }

    this.items[index].active = !this.items[index].active;
  }
}
