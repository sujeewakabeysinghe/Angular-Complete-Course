import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InterfaceFor } from 'src/app/directives/interface';

@Component({
  selector: 'gtn-component-communication',
  templateUrl: './component-communication.component.html',
  styleUrls: ['./component-communication.component.scss']
})
export class ComponentCommunicationComponent implements OnInit {

  @Input() myInput: InterfaceFor[] = [];
  @Output() myOutput = new EventEmitter<InterfaceFor>();

  myOutputClick(clickedInput: InterfaceFor) {
    this.myOutput.emit(clickedInput);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
