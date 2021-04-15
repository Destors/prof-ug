import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServicePageComponent } from './service-page.component';

describe('ServicePageComponent', () => {
  let component: ServicePageComponent;
  let fixture: ComponentFixture<ServicePageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
