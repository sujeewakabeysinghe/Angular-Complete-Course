import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.scss']
})
export class ViewChildComponent implements OnInit {

  title: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
