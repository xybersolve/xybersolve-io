import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyGalleryComponent } from './photography-gallery.component';

describe('PhotographyGalleryComponent', () => {
  let component: PhotographyGalleryComponent;
  let fixture: ComponentFixture<PhotographyGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
