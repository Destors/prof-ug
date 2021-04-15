import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CondInstallPageComponent } from './cond-install-page.component';

describe('CondInstallPageComponent', () => {
  let component: CondInstallPageComponent;
  let fixture: ComponentFixture<CondInstallPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CondInstallPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondInstallPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
