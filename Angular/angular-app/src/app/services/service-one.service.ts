import { Inject, Injectable } from '@angular/core';
import { InterfaceFor } from '../directives/interface';
import { VALUE_PROVIDER_SERVICE_CONFIG } from '../value-providers/value-provider.service';
import { AppConfig } from '../value-providers/appconfig.interface';
// import { environment } from './../../environments/environment'; //no need to do this here and there if you have value provider

@Injectable({
  providedIn: 'root' // this automatically gets registered in app.module.ts
})
export class ServiceOneService {

  serviceOneData: InterfaceFor[] = [
    { name: '*ngFor' },
    { name: '*ngFor' },
    { name: '*ngFor' },
  ]

  getServiceOneData(): InterfaceFor[] {
    return this.serviceOneData;
  }

  constructor(
    @Inject(VALUE_PROVIDER_SERVICE_CONFIG) private config: AppConfig
  ) { 
    // console.log(environment.apiEndPoint);
    console.log(this.config.apiEndPoint);
  }
}
