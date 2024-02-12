import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ComponentCommunicationParentComponent } from './component-communication-parent/component-communication-parent.component';
import { ComponentCommunicationChildComponent } from './component-communication-parent/component-communication-child/component-communication-child.component';
import { NgOnChangesComponent } from './lifecycle-hooks/ng-on-changes/ng-on-changes.component';
import { NgOnInitAndConstructorComponent } from './lifecycle-hooks/ng-on-init-and-constructor/ng-on-init-and-constructor.component';
import { NgDoCheckComponent } from './lifecycle-hooks/ng-do-check/ng-do-check.component';
import { ViewChildComponent } from './component-communication-parent/view-child/view-child.component';
import { ContentProjectionComponent } from './lifecycle-hooks/content-projection/content-projection.component';
import { NgAfterContentInitComponent } from './lifecycle-hooks/ng-after-content-init/ng-after-content-init.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSyntaxComponent,
    DirectivesComponent,
    PipesComponent,
    LifecycleHooksComponent,
    ComponentCommunicationParentComponent,
    ComponentCommunicationChildComponent,
    NgOnChangesComponent,
    NgOnInitAndConstructorComponent,
    NgDoCheckComponent,
    ViewChildComponent,
    ContentProjectionComponent,
    NgAfterContentInitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
