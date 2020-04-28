import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionMainComponent } from './mission-main.component';

describe('MissionMainComponent', () => {
  let component: MissionMainComponent;
  let fixture: ComponentFixture<MissionMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
