import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser"; // used for module based app to run correctly

@NgModule({
  declarations:[AppComponent], //can be used for non standalone application
  bootstrap: [AppComponent],
  imports:[BrowserModule,HeaderComponent,UserComponent, TasksComponent] //can be used for standalone application
})
export class AppModule{

}
