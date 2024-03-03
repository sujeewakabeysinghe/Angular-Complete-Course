import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 

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
import { NgOnDestroyComponent } from './lifecycle-hooks/ng-on-destroy/ng-on-destroy.component';
import { ServiceComponent } from './service/service.component';
import { APP_CONFIG, VALUE_PROVIDER_SERVICE_CONFIG } from './value-providers/value-provider.service';
import { MatNavComponent } from './mat-nav/mat-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DynamicRoutesComponent } from './dynamic-routes/dynamic-routes.component';
import { ActivatedRoutesComponent } from './activated-routes/activated-routes.component';
import { FormsModule } from '@angular/forms';
import { FormsComponent } from './forms/forms.component';
import { CustomDirectiveDirective } from './forms/custom-directive.directive';

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
    NgAfterContentInitComponent,
    NgOnDestroyComponent,
    ServiceComponent,
    MatNavComponent,
    DynamicRoutesComponent,
    ActivatedRoutesComponent,
    FormsComponent,
    CustomDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    {
      provide: VALUE_PROVIDER_SERVICE_CONFIG,
      useValue: APP_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
