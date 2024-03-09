import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleAndRoutingRoutingModule } from './feature-module-and-routing-routing.module';
import { ComponentOneComponent } from '../component-one/component-one.component';


@NgModule({
  declarations: [
    ComponentOneComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleAndRoutingRoutingModule
  ],
  exports: [
    ComponentOneComponent, // should export to access from outside
  ],
})
export class FeatureModuleAndRoutingModule { }

// command : ng g m feature-module-and-routing --routing
// command : ng g c component-one --module=feature-module-and-routing

// easy command for creating all in one go : ng g m m-name --route=r-name --routing --module=app or any-module-you-want-to-register-this