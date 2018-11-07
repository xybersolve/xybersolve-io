import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'xs-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  brandTitle = 'xybersolve.io';
  
  constructor() { }

  ngOnInit() {
  }

}
