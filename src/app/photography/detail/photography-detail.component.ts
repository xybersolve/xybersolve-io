import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { IImage } from '../shared/images.model';
import { PhotographyService } from '../shared/photography.service';

@Component({
  selector: 'xs-photography-detail',
  templateUrl: './photography-detail.component.html',
  styleUrls: ['./photography-detail.component.css']
})
export class PhotographyDetailComponent implements OnInit {
  pageTitle: string = 'Image Detail'
  basePath: string = 'assets/image/gallery/medium-lo-res';
  errorMessage: string = ''
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
    this.router.navigate(['/photography']) 
  }
}
