import { Component } from '@angular/core';

@Component({
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})

export class CodeComponent {
  title = 'Code Gallery';
  showAll = true;  
  showDetail = true;
  showTech = true;

  techFilter = '';  
 
  toggleAll(): void {
    this.showAll = !this.showAll;
    this.showDetail = this.showAll;
    this.showTech = this.showAll;
  }
  toggleDetail(): void {
    this.showDetail = !this.showDetail;
    //this.showAll = this.showDetail === false || this.showTech === false ? true : false;
  }
  toggleTech(): void {
    this.showTech = !this.showTech;
    //this.showAll = this.showDetail === false || this.showTech === false ? true : false;
  }
  onProjectClick(name: string): void {
    console.log(`Got project click in master: ${name}`)
  }

}
