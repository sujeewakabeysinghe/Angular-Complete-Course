import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { ServiceComponent } from './service/service.component';
import { DynamicRoutesComponent } from './dynamic-routes/dynamic-routes.component';
import { ActivatedRoutesComponent } from './activated-routes/activated-routes.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';

const routes: Routes = [
  { path: '', redirectTo: '/directives', pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'dynamic-route', component: DynamicRoutesComponent },
  { path: 'dynamic-route/:paramID', component: ActivatedRoutesComponent },
  {
    path: 'one',
    component: ComponentOneComponent,
    children: [{
      path: 'two',
      component: ComponentTwoComponent
    }]
  },
  { 
    path: 'lazy',
    loadChildren: () => import('./feature-module-and-routing/feature-module-and-routing.module').then(mod => mod.FeatureModuleAndRoutingModule)
  },
  { path: '**', component: BindingSyntaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
