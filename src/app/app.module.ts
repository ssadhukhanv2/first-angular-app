import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser"; // used for module based app to run correctly, only imported in root module
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations:[AppComponent,HeaderComponent,UserComponent], //can be used for non standalone components
  bootstrap: [AppComponent],
  imports:[BrowserModule, FormsModule,SharedModule,TasksModule] //can be used for standalone components
})
export class AppModule{

}
