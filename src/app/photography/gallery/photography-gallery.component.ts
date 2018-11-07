import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { IImage } from '../shared/images.model';
import { PhotographyService } from '../shared/photography.service';

@Component({
  selector: 'xs-photography-gallery',
  templateUrl: './photography-gallery.component.html',
  styleUrls: ['./photography-gallery.component.css'],
  animations: [
    trigger('hideShowImage', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.5s ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PhotographyGalleryComponent implements OnInit {
  basePath = 'assets/image/gallery/medium-lo-res';
  // TODO: add category filter for images 
  mode = 'fine-art';
  images: IImage[] = [];
  imageId: null;
  errorMessage: string;
  constructor(private photographyService: PhotographyService) {}
    
  ngOnInit(): void {
    this.photographyService.getImages().subscribe(
      images => {
        this.images = images;
        this.images = this.filterImages();
        this.imageId = null;
      },
      error => this.errorMessage = <any>error 
    );
  }
  filterImages(): IImage[] {
    return this.images.filter(image => image.show !== false)
               .sort((a, b) => a.sort > b.sort ? 1 : -1);
  }
 
  onClick(): void {
    console.log('got click');
  }  
}
