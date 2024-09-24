import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
// import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  standalone: false,
  // imports: [RouterOutlet, HeaderComponent,UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';
  users= DUMMY_USERS;

  // selectedUserId="u1"
  selectedUserId?:string;

  onSelectUser(id:String){
    console.log("selected user with user_id: "+id)
    this.selectedUserId=id.valueOf()
  }

  get selectedUser(){
    return this.users.find((user)=>user.id===this.selectedUserId)
  }
}
