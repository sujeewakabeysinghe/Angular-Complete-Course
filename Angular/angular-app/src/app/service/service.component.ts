import { Component, OnInit } from '@angular/core';
import { ServiceOneService } from '../services/service-one.service';
import { InterfaceFor } from '../directives/interface';

@Component({
  selector: 'gtn-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  // providers: [ServiceOneService] you can add this if you need couple of instance in your components. nomally this is singleton and use only one global instance, rarely does like this
})
export class ServiceComponent implements OnInit {

  serviceOneItems!: InterfaceFor[];

  constructor(
    private serviceOne: ServiceOneService // nomally this make private, and do not make it public to access to directly to the html
  ) { }

  ngOnInit(): void {
    this.serviceOneItems = this.serviceOne.getServiceOneData();
  }

}
