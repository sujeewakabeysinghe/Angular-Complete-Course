import { Component, OnInit } from '@angular/core';
import { InterfaceIf, InterfaceFor } from './interface';

@Component({
  selector: 'gtn-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  interfaceIf: InterfaceIf = {
    name: '*ngIf',
    ngif: true
  }

  interfaceFor: InterfaceFor[] = [
    { name: '*ngFor'},
    { name: '*ngFor'},
    { name: '*ngFor'},
  ]

  // mySwitch = 'One';
  // mySwitch = 'Two';
  // mySwitch = 'Three';
  switch = 'Four';

  constructor() { }

  ngOnInit(): void {
  }

}
