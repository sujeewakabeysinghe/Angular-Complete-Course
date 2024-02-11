import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-ng-do-check',
  templateUrl: './ng-do-check.component.html',
  styleUrls: ['./ng-do-check.component.scss']
})
export class NgDoCheckComponent implements OnInit, DoCheck {

  constructor() { }

  // do not implement this with ngOnChanges
  ngDoCheck(): void {
    console.log('ngDoCheck works!');
  }

  ngOnInit(): void {
  }

}
