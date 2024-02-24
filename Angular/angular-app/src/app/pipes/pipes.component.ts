import { Component, OnDestroy, OnInit } from '@angular/core';
import { InterfaceFor } from '../directives/interface';
import { Subscription } from 'rxjs';
import { ServiceTwoService } from '../services/service-two.service';

@Component({
  selector: 'gtn-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit, OnDestroy {
  
  date: Date = new Date();
  case = 'suJeeWa';
  currency = 1000;
  decimal = 10.5566;
  percentage = 0.35;
  json: InterfaceFor[] = [
    { name: '*ngFor'},
    { name: '*ngFor'},
    { name: '*ngFor'},
  ]
  slice = 'Slice';

  subscription!: Subscription;
  roomList: any;

  rooms$ = this.serviceTwo.getRooms$;

  constructor(
    private serviceTwo: ServiceTwoService
  ) { }

  ngOnDestroy(): void {
    // if(this.subscription) {
    //   this.subscription.unsubscribe();
    // }
    // you don not need this if you are using async pipe to subscribe data stream
  }

  ngOnInit(): void {
    // this.subscription = this.serviceTwo.getRooms$.subscribe( room => {
    //   this.roomList = room
    // });
    // you don not need this if you are using async pipe to subscribe data stream
  }

}
