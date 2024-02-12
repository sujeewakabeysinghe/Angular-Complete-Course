import { AfterContentChecked, AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';
import { NgOnInitAndConstructorComponent } from '../ng-on-init-and-constructor/ng-on-init-and-constructor.component';

@Component({
  selector: 'gtn-ng-after-content-init',
  templateUrl: './ng-after-content-init.component.html',
  styleUrls: ['./ng-after-content-init.component.scss']
})
export class NgAfterContentInitComponent implements OnInit, AfterContentInit, AfterContentChecked {

  @Input() ngAfterContentInitInput!: string;

  @ContentChild(NgOnInitAndConstructorComponent) ngAfterContentInitGetData!: NgOnInitAndConstructorComponent; // this only can access in ngAfterContentInit()

  constructor() { }

  // ngAfterContentInit will fire only once, if your content gets changed those changes will detect here and if you have anything to get done you can use this hook
  ngAfterContentChecked(): void {
    throw new Error('Method not implemented.');
  }

  ngAfterContentInit(): void {
    console.log(this.ngAfterContentInitGetData);
    this.ngAfterContentInitGetData.ngAfterContentInit = this.ngAfterContentInitInput;
  }

  ngOnInit(): void {
  }

}
