import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() cancel=new EventEmitter<void>();
  @Output() add=new EventEmitter<NewTaskData>();

  // two way binding using signals
  // enteredTitle=signal<string>('')
  // enteredSummary=signal<string>('')
  // enteredDueDate=signal<string>('')

  // regular angular zone.js is used to implement 2 way binding
  enteredTitle=''
  enteredSummary=''
  enteredDueDate=''
  onCancel(){
    this.cancel.emit()
  }


  //using signals
  // onSubmit(){
  //   console.log(this.enteredTitle()+"\n"+this.enteredSummary()+"\n"+this.enteredDueDate()+"\n")
  // }

 onSubmit(){
    console.log(this.enteredTitle+"\n"+this.enteredSummary+"\n"+this.enteredDueDate)
    this.add.emit({
      title:this.enteredTitle,
      summary:this.enteredSummary,
      dueDate:this.enteredDueDate,
    })
  }
}
