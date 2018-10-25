import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyDetailComponent } from './photography-detail.component';

describe('PhotographyDetailComponentComponent', () => {
  let component: PhotographyDetailComponent;
  let fixture: ComponentFixture<PhotographyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
