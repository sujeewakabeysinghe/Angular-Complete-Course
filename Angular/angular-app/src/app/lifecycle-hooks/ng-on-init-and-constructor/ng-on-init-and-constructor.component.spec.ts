import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgOnInitAndConstructorComponent } from './ng-on-init-and-constructor.component';

describe('NgOnInitAndConstructorComponent', () => {
  let component: NgOnInitAndConstructorComponent;
  let fixture: ComponentFixture<NgOnInitAndConstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgOnInitAndConstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgOnInitAndConstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
