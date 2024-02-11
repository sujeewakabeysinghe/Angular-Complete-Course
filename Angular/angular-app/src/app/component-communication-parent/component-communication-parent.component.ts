import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { InterfaceFor } from '../directives/interface';
import { ViewChildComponent } from './view-child/view-child.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'gtn-component-communication-parent',
  templateUrl: './component-communication-parent.component.html',
  styleUrls: ['./component-communication-parent.component.scss']
})
export class ComponentCommunicationParentComponent implements OnInit, AfterViewInit, AfterViewChecked {

  @ViewChild(ViewChildComponent) viewChildComponent1!: ViewChildComponent;
  @ViewChild(ViewChildComponent, {static : true}) viewChildComponent2!: ViewChildComponent;

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

  ngAfterViewChecked(): void {
    this.viewChildComponent1.title = 'ng-after-view-init works kk!';
  }

  ngAfterViewInit(): void {
    console.log(this.viewChildComponent1);
    this.viewChildComponent1.title = 'ng-after-view-init works!';
  }
  // ERROR Error: NG0100: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: ''. Current value: 'ng-after-view-init works!'.. Find more at https://angular.io/errors/NG0100
  // this error is totally fine because this shows only in angular development environment

  ngOnInit(): void {
    // add static: true to get that here, make sure you do not have any async in view child component
    console.log(this.viewChildComponent1);
    console.log(this.viewChildComponent2);
  }


}
