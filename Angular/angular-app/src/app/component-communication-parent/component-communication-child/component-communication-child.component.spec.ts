import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationChildComponent } from './component-communication-child.component';

describe('ComponentCommunicationChildComponent', () => {
  let component: ComponentCommunicationChildComponent;
  let fixture: ComponentFixture<ComponentCommunicationChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCommunicationChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunicationChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
