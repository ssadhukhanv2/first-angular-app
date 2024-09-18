import { Component, EventEmitter, Input, Output, computed, input, output, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
//explicitly defining type outside
// type User={
//   id:String
//   avatar:String
//   name:String
// }
// we can also use intrface to define type. this approach is more common in angular(with this we can only define type nothing else)
interface User{
  id:String
  avatar:String
  name:String
}

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  //we use the @Input decorator to accept component input
  // @Input({required:true}) id!:String
  // @Input({required:true}) avatar!:String
  // @Input({required:true}) name!:String


  // we can use object types //inline
  // @Input({required:true}) user!:{
  //   id:String
  //   avatar:String
  //   name:String
  // }
  @Input({required:true}) user!:User
  //use @Output() to emit events
  @Output() select=new EventEmitter<String>();

  //use output() to emit events
  // select=output<String>();


  //using input signals to accept component input
  // avatar=input.required<string>()
  // name=input.required<string>()
  // imagePath=computed(()=>'./assets/users/'+this.avatar())

  //zone.js way of dynamically updating content
  // selectedUser= DUMMY_USERS[randomIndex]

  //dynamically update content using signal
  // selectedUserSignal= signal(DUMMY_USERS[randomIndex])
  // imagePath=computed(()=>'./assets/users/'+this.selectedUserSignal().avatar) //computed is used with signal



  // getter method
  get imagePath(){
    // return './assets/users/'+this.selectedUser.avatar
    // return './assets/users/'+this.avatar
    return './assets/users/'+this.user.avatar
  }

  onSelectUser(){

    // const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length)
    //zone.js way of dynamically updating content
    // this.selectedUser=DUMMY_USERS[randomIndex]

    //dynamically update content using signal
    //set using set() method of the signal
    // this.selectedUserSignal.set(DUMMY_USERS[randomIndex])
    // console.log('Clicked '+this.id)
    // this.select.emit(this.id)
    console.log('Clicked '+this.user.id)

    this.select.emit(this.user.id)
  }
}
