import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  title: string = 'Image Gallery';
  showDetail: boolean = true;
  
  constructor() { }

  toggleDetail(): void {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
    
  }
  
}
