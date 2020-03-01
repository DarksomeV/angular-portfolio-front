import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes,
} from '@angular/animations';

export const slider =
  trigger('routeAnimations', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      group([
        query(':leave', [
        style({
          opacity: 1,
          transform: 'translate3d(0,0,0)'
        })
      ], { optional: true }),
        query(':enter', [
        style({
          opacity: 0,
          transform: 'translate3d(-70%,0,0)'
        })
      ], { optional: true })]),

      group([
        query(':leave', [
        animate('1000ms ease', style({
          opacity: 0,
          transform: 'translate3d(-70%,0,0)'})),
      ], { optional: true }),
        query(':enter', [
          animate('1000ms ease', style({
            opacity: 1,
            transform: 'translate3d(0,0,0)'})),
        ], { optional: true })])
      // Animate the new page in



    ])
  ]);

