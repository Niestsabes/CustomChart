import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmAttributePageComponent } from './dm-attribute-page.component';

describe('DmAttributePageComponent', () => {
  let component: DmAttributePageComponent;
  let fixture: ComponentFixture<DmAttributePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmAttributePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmAttributePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
