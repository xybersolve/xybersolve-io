import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'xs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'DevOps Solutions';

  constructor() {}

  ngOnInit() {}

}
