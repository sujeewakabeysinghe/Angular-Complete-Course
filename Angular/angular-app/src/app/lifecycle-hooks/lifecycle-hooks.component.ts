import { Component, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit {

  onDestroyToggle = true;

  ngAfterContentInitInput = 'ngAfterContentInit Input';

  myNgOnChanges1: InterfaceFor[] = [
    { name: '*ngFor 1'},
    { name: '*ngFor 2'},
    { name: '*ngFor 3'},
  ]
  myNgOnChanges2 = 3;

  clickOnDestroyToggle() {
    this.onDestroyToggle = !this.onDestroyToggle;
  }

  addNgOnChanges() {
    this.myNgOnChanges2++;
    const newMyNgOnChanges: InterfaceFor = {name: `*ngFor ${this.myNgOnChanges2}`};
    // this.myInput.push(newMyInput); this would not modify the value and it would not make any changes to detect on ngOnChange hooks
    this.myNgOnChanges1 = [...this.myNgOnChanges1, newMyNgOnChanges];
  }

  // when this event is getting compiled, even though non-related and separated ngDoCheck component's ngDoCheck also fired
  addNgDoCheck() {
    console.log('Hi');
  }

  constructor() {
    console.log('parent constructor works!');
   }

  ngOnInit(): void {
    console.log('parent ngOnInit works!');
  }

}
