import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStatusDemoComponent } from './form-status-demo.component';

describe('FormStatusDemoComponent', () => {
  let component: FormStatusDemoComponent;
  let fixture: ComponentFixture<FormStatusDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormStatusDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormStatusDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
