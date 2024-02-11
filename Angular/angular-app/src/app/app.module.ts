import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingSyntaxComponent } from './binding-syntax/binding-syntax.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { ComponentCommunicationComponent } from './lifecycle-hooks/component-communication/component-communication.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingSyntaxComponent,
    DirectivesComponent,
    PipesComponent,
    LifecycleHooksComponent,
    ComponentCommunicationComponent
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
