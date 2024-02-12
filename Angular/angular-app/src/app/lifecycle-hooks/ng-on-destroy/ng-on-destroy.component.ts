import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-ng-on-destroy',
  templateUrl: './ng-on-destroy.component.html',
  styleUrls: ['./ng-on-destroy.component.scss']
})
export class NgOnDestroyComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    console.log('ngOnDestroy!');
  }

  ngOnInit(): void {
  }

}
