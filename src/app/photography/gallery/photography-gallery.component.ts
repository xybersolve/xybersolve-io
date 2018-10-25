import { Component, OnInit } from '@angular/core';

import { IImage } from '../shared/images.model'
import { PhotographyService } from '../shared/photography.service'

@Component({
  selector: 'xs-photo-gallery',
  templateUrl: './photography-gallery.component.html',
  styleUrls: ['./photography-gallery.component.css']
})
export class PhotographyGalleryComponent implements OnInit {
  basePath: string = 'image/gallery/medium-lo-res';
  mode : string = 'fine-art'
  images: IImage[] = [];
  imageId: null;
  errorMessage: string;
  constructor(private photographyService: PhotographyService){}
    
  ngOnInit(): void {
    this.photographyService.getImages().subscribe(
      images => {
        this.images = images;
        this.images = this.filterImages();
        //this.images = this.sortImages();
        this.imageId = null;
      },
      error => this.errorMessage = <any>error 
    )
  }
  filterImages(): IImage[] {
    return this.images.filter(image => image.show != false)
               .sort((a,b) => a.sort > b.sort ? 1 : -1)
  }
 
  onClick() :void {
    console.log('got click');
  }  
}
