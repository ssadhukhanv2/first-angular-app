import { Component, EventEmitter, Input, Output, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TasksService } from '../tasks/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close=new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();
  @Input({required:true}) userId!:string


  private tasksService=inject(TasksService)

  // two way binding using signals
  // enteredTitle=signal<string>('')
  // enteredSummary=signal<string>('')
  // enteredDueDate=signal<string>('')

  // regular angular zone.js is used to implement 2 way binding
  enteredTitle=''
  enteredSummary=''
  enteredDueDate=''
  onClose(){
    this.close.emit()
  }


  //using signals
  // onSubmit(){
  //   console.log(this.enteredTitle()+"\n"+this.enteredSummary()+"\n"+this.enteredDueDate()+"\n")
  // }

 onSubmit(){
    this.tasksService.addTask({
        title:this.enteredTitle,
        summary:this.enteredSummary,
        dueDate:this.enteredDueDate
      },this.userId)
      this.close.emit()

    // console.log(this.enteredTitle+"\n"+this.enteredSummary+"\n"+this.enteredDueDate)
    // this.add.emit({
    //   title:this.enteredTitle,
    //   summary:this.enteredSummary,
    //   dueDate:this.enteredDueDate,
    // })
  }
}
