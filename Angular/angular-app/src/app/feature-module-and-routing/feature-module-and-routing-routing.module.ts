import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentOneComponent } from '../component-one/component-one.component';

const routes: Routes = [
  // { path: 'your-path', component: YourComponent },
  { path: '', component: ComponentOneComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureModuleAndRoutingRoutingModule { }
