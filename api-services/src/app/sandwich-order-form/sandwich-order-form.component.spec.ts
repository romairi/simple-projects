import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SandwichOrderFormComponent } from './sandwich-order-form.component';

describe('SandwichOrderFormComponent', () => {
  let component: SandwichOrderFormComponent;
  let fixture: ComponentFixture<SandwichOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SandwichOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SandwichOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
