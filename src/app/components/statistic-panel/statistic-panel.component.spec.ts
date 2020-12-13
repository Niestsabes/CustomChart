import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticPanelComponent } from './statistic-panel.component';

describe('StatisticPanelComponent', () => {
  let component: StatisticPanelComponent;
  let fixture: ComponentFixture<StatisticPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
