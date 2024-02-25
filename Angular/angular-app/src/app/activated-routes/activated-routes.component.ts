import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gtn-activated-routes',
  templateUrl: './activated-routes.component.html',
  styleUrls: ['./activated-routes.component.scss']
})
export class ActivatedRoutesComponent implements OnInit {

  param!: any;

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.param = this.router.snapshot.params['paramID']; // if you use this, this will not updated the same view

    this.router.params.subscribe( params => {
      console.log(params);
      this.param = params;
      // this.param = params['paramID'];
    })
  }

}
