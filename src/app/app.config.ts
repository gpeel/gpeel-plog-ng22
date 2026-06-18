import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePlog } from '@gpeel/plog';
import { plogConfig } from './plog-config';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // importProvidersFrom(PlogModule.forRoot(plogConfig)) // works OK as an alternative for below
    providePlog(plogConfig),
  ],
};

