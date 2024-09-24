import { Component, Input } from '@angular/core';
// import { TaskComponent } from "../task/task.component";
// import { NewTaskComponent } from "../new-task/new-task.component";
import { NewTaskData } from '../new-task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // @Input({required:true}) name!:string;
  @Input({required:true}) name!:string;
  @Input({required:true}) userId!:string;
  // @Input() name:string|undefined; //union type
  addingTask=false

  //putting private/public here would create an instance variable of the same name and inject the TaskService class
  constructor(private taskService:TasksService){}

  // taskService: TasksService
  // constructor(taskService:TasksService){
  //   this.taskService=taskService
  // }

  // dummyTasks = [
  //   {
  //     id: 't1',
  //     userId: 'u1',
  //     title: 'Master Angular',
  //     summary:
  //       'Learn all the basic and advanced features of Angular & how to apply them.',
  //     dueDate: '2025-12-31',
  //   },
  //   {
  //     id: 't2',
  //     userId: 'u3',
  //     title: 'Build first prototype',
  //     summary: 'Build a first prototype of the online shop website',
  //     dueDate: '2024-05-31',
  //   },
  //   {
  //     id: 't3',
  //     userId: 'u3',
  //     title: 'Prepare issue template',
  //     summary:
  //       'Prepare and describe an issue template which will help with project management',
  //     dueDate: '2024-06-15',
  //   },
  // ]
  get selectedUserTasks(){
    return this.taskService.getUserTasks(this.userId)
    // return this.dummyTasks.filter((task)=>task.userId===this.userId)
  }

  // onCompleteTask(id:string){
  //   this.taskService.removeTask(id)
  //   // this.dummyTasks=this.dummyTasks.filter((task)=>task.id!==id)
  // }

  onStartAddTask(){
    this.addingTask=true
  }

  onCloseNewTask(){
    this.addingTask=false
  }

  addTask(task:NewTaskData){
    this.taskService.addTask(task,this.userId)
    // this.dummyTasks.push({
    //   id: new Date().getTime().toString(),
    //   userId: this.userId,
    //   title: task.title,
    //   summary: task.summary,
    //   dueDate: task.dueDate,
    // })
    this.addingTask=false
  }
}
