import { Component, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  
  date: Date = new Date();
  case = 'suJeeWa';
  currency = 1000;
  decimal = 10.5566;
  percentage = 0.35;
  json: InterfaceFor[] = [
    { name: '*ngFor'},
    { name: '*ngFor'},
    { name: '*ngFor'},
  ]
  slice = 'Slice';

  constructor() { }

  ngOnInit(): void {
  }

}
