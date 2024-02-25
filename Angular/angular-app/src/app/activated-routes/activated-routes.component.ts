import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'gtn-activated-routes',
  templateUrl: './activated-routes.component.html',
  styleUrls: ['./activated-routes.component.scss']
})
export class ActivatedRoutesComponent implements OnInit {

  param!: any;
  param$!: Observable<string>; // id is string

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.param = this.router.snapshot.params['paramID']; // if you use this, this will not updated the same view

    // this.router.params.subscribe( params => {
    //   console.log(params);
    //   this.param = params;
    //   // this.param = params['paramID'];
    // })

    this.param$ = this.router.params.pipe(
      map( params => params['paramID'])
    )

    // this.param$ = this.router.paramMap.pipe(
    //   map( params => params.get('paramID'))
    // )
    // another way to access more
  }

}
