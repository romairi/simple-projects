import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleGalleryComponent } from './people-gallery.component';

describe('PeopleGalleryComponent', () => {
  let component: PeopleGalleryComponent;
  let fixture: ComponentFixture<PeopleGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
