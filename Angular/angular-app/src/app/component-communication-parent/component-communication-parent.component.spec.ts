import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCommunicationParentComponent } from './component-communication-parent.component';

describe('ComponentCommunicationParentComponent', () => {
  let component: ComponentCommunicationParentComponent;
  let fixture: ComponentFixture<ComponentCommunicationParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCommunicationParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCommunicationParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
