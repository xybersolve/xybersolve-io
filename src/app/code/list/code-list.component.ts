import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  sequence,
  stagger,
  group,
  AUTO_STYLE
} from '@angular/animations';

import { IProject } from '../shared/project.model';
import { ProjectService } from '../shared/project.service';

@Component({
  selector: 'xs-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.css'],
  providers: [ ProjectService ], // TODO: remove when admin is added
  /*  
    shortcut - aliases
      ':enter' = 'void => *'
      ':leave' = '* => void'
  */
  animations: [
    // slide in out
    // trigger('hideShowDetail', [
      // transition(':enter', [
      //   style({transform: 'translateX(100%)', opacity: 0}),
      //   animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
      // ]),
      // transition(':leave', [
      //   style({transform: 'translateX(0)', opacity: 1}),
      //   animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
      // ]),
    // ]),
    //
    // fade in and out
    trigger('hideShowDetail', [
      transition(':enter', [
        style({opacity: 0}),
        sequence([
          animate('150ms ease-in-out', style({
            opacity: 1
          })),
          animate('350ms ease-in-out', style({
            height: AUTO_STYLE
          })),
        ])
        
      ]),
      transition(':leave', [
        sequence([
          animate('150ms ease-in-out', style({
            opacity: 0
          })),
          animate('350ms ease-in-out', style({
            height: '0px'
          })),  
        ])
        
      ])  
    ]),
    trigger('hideShowTech', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.5s ease-in', style({opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('0.5s ease-out', style({opacity: 0, height: '0px' }))
      ])
    ])
  ]
})

export class CodeListComponent implements OnInit  {
  projects: IProject[] = [];
  filteredProjects: IProject[];
  errorMessage: string;
  itemState = 'out';

  @Input() showTech = true;
  @Input() showDetail = true;
  
  _techFilter: string;
  @Input() get techFilter(): string {
    return this._techFilter;
  }
  
  // Capture project click  to eventually record project selection
  @Output() projectClick: EventEmitter<string> = new EventEmitter <string>();  
  onProjectClick(projectName: string): void {
     console.log(`Got Project click: ${projectName}`);
     this.projectClick.emit(projectName);
  }

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      projects => {
        this.projects = projects;
        this.filteredProjects = this.projects;  
      },  
      error => this.errorMessage = <any>error
    );
  } 

  // booleans from master control level of detail in display

  // techFilter: from master to filter by a technology term 
  // project filtering on tech terms
  // in class method, in lieu of pipe (slower) 

  set techFilter(value: string) {
    this._techFilter = value;
    this.filteredProjects = this.techFilter ? this.filterTechTerms(this.techFilter) : this.projects;
  }

  // TODO: 
  filterTechTerms(filterBy: string): IProject[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.projects.filter((project: IProject) =>   
      project.technology.some((tech) => 
        // match (like) i.e., leading characters 
        tech.toLocaleLowerCase().slice(0, filterBy.length) === filterBy
        // match the whole word
        //return tech.toLocaleLowerCase() === filterBy
      )
    );
  }

  onClick(href) {
    console.log(`got click ${href}`)
    window.open(href, "_blank");
    //this.router.navigate(['/auth']);
  }
}
