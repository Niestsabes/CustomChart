import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadDataPageComponent } from './load-data-page.component';

describe('LoadDataPageComponent', () => {
  let component: LoadDataPageComponent;
  let fixture: ComponentFixture<LoadDataPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadDataPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadDataPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
