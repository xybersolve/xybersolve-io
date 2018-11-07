import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  stagger,
  group,
  AUTO_STYLE,
  animation
} from '@angular/animations';

import { IImage } from '../shared/images.model';
import { PhotographyService } from '../shared/photography.service';

@Component({
  selector: 'xs-photography-detail',
  templateUrl: './photography-detail.component.html',
  styleUrls: ['./photography-detail.component.css'],
  animations: [
    trigger('enterLeave', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
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
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('900ms ease-in', style({ opacity: 1 })) 
      ])
    ])
  ]
})
export class PhotographyDetailComponent implements OnInit {
  pageTitle = 'Image Detail';
  basePath = 'assets/image/gallery/medium-lo-res';
  errorMessage = '';
  image: IImage | undefined;

  constructor(private router: Router, 
     private route: ActivatedRoute, 
     private photographyService: PhotographyService) {}

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const imageId = +param;
      this.getImage(imageId); 
    }
  }

  getImage(imageId: number): void {
    this.photographyService.getImage(imageId).subscribe(
      image => this.image = image,
      error => this.errorMessage = <any>error
    );
  }

  onBack(): void {
    this.router.navigate(['/photography']);
  }
}
