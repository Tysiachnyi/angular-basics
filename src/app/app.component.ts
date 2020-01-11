import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic title';
  // number = 42;
  // arr= [1,2,3];
  // obj = {a:1, b:2};
  // helloText = 'Hello friend :)';
  // inputValue = ' ';
  // inputField = 'Yo';
  // title = ' '



  constructor(){
    
  }

// arr =  [1,1,2,3,5,8,13]

// objs = [
//   {title: 'Post1', author: 'Vladilen', comments:[
//     {name: 'Max', text:'lorem 1'},
//     {name: 'Max', text:'lorem 2'},
//     {name: 'Max', text:'lorem 3'}

//   ]},
//   {title: 'Post2', author: 'Vladilen 2', comments:[
//     {name: 'Max 2', text:'lorem 1'},
//     {name: 'Max 2', text:'lorem 2'},
//     {name: 'Max 2', text:'lorem 3'}

//   ]}

// ]

currentDate = new Date()

  //  toogle:boolean = false; 
  // seeVar:boolean = false; ngStyle

  // onInput(event:any){
  // this.title = event.target.value;
  // }

  // onInput(event:KeyboardEvent){
  //   console.log('Event', event)
  //   this.inputValue = (<HTMLInputElement>event.target).value;
  // }

  // onEnterClick(event:KeyboardEvent){
  //   this.inputField = (<HTMLInputElement>event.target).value;
  // }

  // onEnterClickString(str:string){
  //   this.inputField = str;
  // }

  // onBlur(str:string){
  // this.inputValue = str;
  // }

  // onClick(){
  //   console.log('click')
  // }

  
}
