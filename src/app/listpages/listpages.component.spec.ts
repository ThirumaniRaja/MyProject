import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpagesComponent } from './listpages.component';

describe('ListpagesComponent', () => {
  let component: ListpagesComponent;
  let fixture: ComponentFixture<ListpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
