import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';  // Update if needed
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),       // Add routing
    HttpClientModule,            // Provide HttpClientModule here
  ],
};
