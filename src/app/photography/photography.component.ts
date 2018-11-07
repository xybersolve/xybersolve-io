import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  title = 'Image Gallery';
  showDetail = true;
  
  constructor() { }

  toggleDetail(): void {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
    
  }
  
}
