import { Component, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

  myNgOnChanges1: InterfaceFor[] = [
    { name: '*ngFor 1'},
    { name: '*ngFor 2'},
    { name: '*ngFor 3'},
  ]
  myNgOnChanges2 = 3;

  addNgOnChanges() {
    this.myNgOnChanges2++;
    const newMyNgOnChanges: InterfaceFor = {name: `*ngFor ${this.myNgOnChanges2}`};
    // this.myInput.push(newMyInput); this would not modify the value and it would not make any changes to detect on ngOnChange hooks
    this.myNgOnChanges1 = [...this.myNgOnChanges1, newMyNgOnChanges];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
