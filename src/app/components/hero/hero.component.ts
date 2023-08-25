import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  providers: [],
})
export class HeroComponent {
  slides = [
    {
      img: 'assets/img/slide/slide-1.jpg',
      title: 'Welcome to Company',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 1',
    },
    {
      img: 'assets/img/slide/slide-2.jpg',
      title: 'Lorem Ipsum Dolor',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 2',
    },
    {
      img: 'assets/img/slide/slide-3.jpg',
      title: 'Sequi ea ut et est quaerat',
      text: ' Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et est quaerat sequi nihil ut aliquam. Occaecati alias dolorem mollitia ut. Similique ea voluptatem. Esse doloremque accusamus repellendus deleniti vel. Minus et tempore modi architecto.',
      alt: 'Slide 3',
    },
  ];

  constructor() {}
}
