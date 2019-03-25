import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastMenuPage } from './past-menu.page';

describe('PastMenuPage', () => {
  let component: PastMenuPage;
  let fixture: ComponentFixture<PastMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
