import { Component, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

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
