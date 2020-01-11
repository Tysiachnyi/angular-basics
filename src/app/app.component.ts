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
  title = ' '



  constructor(){
    
  }

  onInput(event:any){
  this.title = event.target.value;
  }

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
