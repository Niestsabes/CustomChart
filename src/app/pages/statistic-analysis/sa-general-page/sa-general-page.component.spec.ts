import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaGeneralPageComponent } from './sa-general-page.component';

describe('SaGeneralPageComponent', () => {
  let component: SaGeneralPageComponent;
  let fixture: ComponentFixture<SaGeneralPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaGeneralPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
