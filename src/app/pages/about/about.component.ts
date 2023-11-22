import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
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
  responsiveOptions: any[] = [];

  constructor(private titleService: Title) {
    this.titleService.setTitle('Sobre mí - DGLTrainer');
  }

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
