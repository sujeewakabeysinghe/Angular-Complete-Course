import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-binding-syntax',
  templateUrl: './binding-syntax.component.html',
  styleUrls: ['./binding-syntax.component.scss']
})
export class BindingSyntaxComponent implements OnInit {

  // Interpolation
  interpolation = 'Interpolation';

  // Property Binding
  propertyBinding = 'Property Binding';
  hidePropertyBinding = false;
  interpolatedButtonText = 'Hide Property Binding';

  // Event Binding
  eventBinding() {
    this.hidePropertyBinding = !this.hidePropertyBinding;
    this.interpolatedButtonText = this.hidePropertyBinding ? 'Show Property Binding' : 'Hide Property Binding';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
