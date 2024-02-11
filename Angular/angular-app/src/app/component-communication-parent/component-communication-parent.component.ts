import { Component, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-component-communication-parent',
  templateUrl: './component-communication-parent.component.html',
  styleUrls: ['./component-communication-parent.component.scss']
})
export class ComponentCommunicationParentComponent implements OnInit {

  clickedInput!: InterfaceFor;

  myInput: InterfaceFor[] = [
    { name: '*ngFor 1'},
    { name: '*ngFor 2'},
    { name: '*ngFor 3'},
  ]

  myOutputClicked(clickedMyInput: InterfaceFor) {
    this.clickedInput = clickedMyInput;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
