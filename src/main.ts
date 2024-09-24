// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { HeaderComponent } from './app/header/header.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';


/**
 * this function is first executed when the code is loaded in the client browsers
 */
//this is used for modules
platformBrowserDynamic().bootstrapModule(AppModule);


//this works only when AppComponent is a Standalone Component
// bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
// bootstrapApplication(HeaderComponent).catch((err)=>console.log(err))

