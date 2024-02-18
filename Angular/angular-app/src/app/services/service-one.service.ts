import { Injectable } from '@angular/core';
import { InterfaceFor } from '../directives/interface';

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

  constructor() { }
}
