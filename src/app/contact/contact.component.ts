import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  stagger,
  group,
  keyframes,
  AUTO_STYLE,
  animation
} from '@angular/animations';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    // TODO: use keyframes - to create bounce-in from top
    trigger('locationMap', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(200%)' }),
        group([
          animate('500ms ease-in-out', style({ opacity: 1 } )),
          animate('350ms ease-in-out', style({ transform: 'translateX(0%)' }))
        ])
      ]),
      transition(':leave', [
        sequence([
          animate('350ms ease-in-out', style({ transform: 'translateX(100%)' })),
          animate('500ms ease-in-out', style({ opacity: 0 }))
        ])
      ])
    ]),
    trigger('businessCard', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%) rotate3d(0, 0, 1, -200deg)' }),
        group([
          animate('600ms ease-in-out', style({ opacity: 1 } )),
          animate('600ms ease-in-out', style({ transform: 'translate3d(0, 0, 0)' }))
        ])
      ]),
      transition(':leave', [
        sequence([
          animate('350ms ease-in-out', style({ transform: 'translateY(100%)' })),
          animate('500ms ease-in-out', style({ opacity: 0 }))
        ])
      ])
    ])
  ]  
})
export class ContactComponent implements OnInit {
  title = 'Contact Info';
  
  constructor() { }

  ngOnInit() {
  }

}
