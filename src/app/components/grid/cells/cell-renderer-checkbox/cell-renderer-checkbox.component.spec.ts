import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellRendererCheckboxComponent } from './cell-renderer-checkbox.component';

describe('CellRendererCheckboxComponent', () => {
  let component: CellRendererCheckboxComponent;
  let fixture: ComponentFixture<CellRendererCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellRendererCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellRendererCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
