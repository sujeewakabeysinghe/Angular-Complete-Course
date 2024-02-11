import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-ng-on-init-and-constructor',
  templateUrl: './ng-on-init-and-constructor.component.html',
  styleUrls: ['./ng-on-init-and-constructor.component.scss']
})
export class NgOnInitAndConstructorComponent implements OnInit {

  // this is getting compiled firstly and only once
  constructor() { 
    console.log('child constructor works!');
  }

  // this is getting compiled thirdly and only once, if you have ngOnChanges, it's second but it will compile whenever you modify inputs
  ngOnInit(): void {
    console.log('child ngOnInit works!');
  }

}
