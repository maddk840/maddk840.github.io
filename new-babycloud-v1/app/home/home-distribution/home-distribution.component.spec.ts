import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDistributionComponent } from './home-distribution.component';

describe('HomeDistributionComponent', () => {
  let component: HomeDistributionComponent;
  let fixture: ComponentFixture<HomeDistributionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDistributionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
