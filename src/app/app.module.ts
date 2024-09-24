import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser"; // used for module based app to run correctly
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./task/task.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
  declarations:[AppComponent,HeaderComponent,UserComponent,CardComponent,TasksComponent,TaskComponent, NewTaskComponent], //can be used for non standalone components
  bootstrap: [AppComponent],
  imports:[BrowserModule, FormsModule] //can be used for standalone components
})
export class AppModule{

}
