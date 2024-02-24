import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  { path: '', redirectTo: '/directives', pathMatch: 'full' },
  { path: 'pipes', component: PipesComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: '**', component: BindingSyntaxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
