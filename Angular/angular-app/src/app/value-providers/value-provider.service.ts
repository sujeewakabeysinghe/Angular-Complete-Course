import { InjectionToken } from "@angular/core";
import { AppConfig } from "./appconfig.interface";
import { environment } from "./../../environments/environment"; // you have to import this here only, otherwise you have to import this here and there to access this.

export const VALUE_PROVIDER_SERVICE_CONFIG = new InjectionToken<AppConfig>('app.config');

export const APP_CONFIG: AppConfig = {
    apiEndPoint : environment.apiEndPoint
}