import {
  AnimationTriggerMetadata,
  trigger,
  transition,
  style,
  animate,
  query,
} from '@angular/animations';

// animation.ts
export function Fade(): AnimationTriggerMetadata {
  return trigger('fade', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate(2000, style({ opacity: 1 })),
    ]),
  ]);
}

export function FadeUp(): AnimationTriggerMetadata {
  return trigger('fade-up', [
    transition('void => *', [
      style({ opacity: 0 }),
      animate('5s ease', style({ opacity: 1, height: 'fit-content' })),
    ]),
  ]);
}

export function fadeAnimation(): AnimationTriggerMetadata {
  return trigger('fadeAnimation', [
    transition('* => *', [
      query(':enter', [style({ opacity: 0, position: 'absolute' })], {
        optional: true,
      }),
      query(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('0.3s', style({ opacity: 0, position: 'absolute' })),
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          style({ opacity: 0 }),
          animate('0.3s', style({ opacity: 1, position: 'relative' })),
        ],
        { optional: true }
      ),
    ]),
  ]);
}
