import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmRowPageComponent } from './dm-row-page.component';

describe('DmRowPageComponent', () => {
  let component: DmRowPageComponent;
  let fixture: ComponentFixture<DmRowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmRowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmRowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
