import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceFor } from 'src/app/directives/interface';

@Component({
  selector: 'gtn-component-communication-child',
  templateUrl: './component-communication-child.component.html',
  styleUrls: ['./component-communication-child.component.scss']
})
export class ComponentCommunicationChildComponent implements OnInit {

  @Input() myInput: InterfaceFor[] = [];
  @Output() myOutput = new EventEmitter<InterfaceFor>();

  myOutputClick(clickedInput: InterfaceFor) {
    this.myOutput.emit(clickedInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
