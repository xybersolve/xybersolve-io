import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'xs-photography', // omit - part of routing
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.css']
})
export class PhotographyComponent implements OnInit {
  title: string = 'Photography Gallery';
  showDetail: boolean = true;
  
  constructor() { }

  toggleDetail(): void {
    this.showDetail = !this.showDetail;
  }

  ngOnInit() {
    
  }
  
}
