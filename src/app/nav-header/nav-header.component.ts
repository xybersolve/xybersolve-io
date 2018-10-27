import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  brandTitle = 'xybersolve.io'
  
  constructor() { }

  ngOnInit() {
  }

}
