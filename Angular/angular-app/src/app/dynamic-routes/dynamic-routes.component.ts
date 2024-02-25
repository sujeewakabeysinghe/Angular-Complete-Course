import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gtn-dynamic-routes',
  templateUrl: './dynamic-routes.component.html',
  styleUrls: ['./dynamic-routes.component.scss']
})
export class DynamicRoutesComponent implements OnInit {

  id = '123abc';

  constructor() { }

  ngOnInit(): void {
  }

}
