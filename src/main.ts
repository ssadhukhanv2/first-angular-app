import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HeaderComponent } from './app/header/header.component';


/**
 * this function is first executed when the code is loaded in the client browsers
 */
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent).catch((err)=>console.log(err))

