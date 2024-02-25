import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoutesComponent } from './activated-routes.component';

describe('ActivatedRoutesComponent', () => {
  let component: ActivatedRoutesComponent;
  let fixture: ComponentFixture<ActivatedRoutesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatedRoutesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
