import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePeopleComponent } from './favorite-people.component';

describe('FavoritePeopleComponent', () => {
  let component: FavoritePeopleComponent;
  let fixture: ComponentFixture<FavoritePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePeopleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
