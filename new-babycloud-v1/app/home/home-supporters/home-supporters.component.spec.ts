import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupportersComponent } from './home-supporters.component';

describe('HomeSupportersComponent', () => {
  let component: HomeSupportersComponent;
  let fixture: ComponentFixture<HomeSupportersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupportersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSupportersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
