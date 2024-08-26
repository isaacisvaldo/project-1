import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-1';
  inputText:string ='Texto Inicial'
  inputype:string='text'
  isDisable= false

  enableInput(){
    this.isDisable= false
  }
  disableInput(){
    this.isDisable= true
  }
  setTextInput(){
    this.inputype='text'
  }
  setPasswordInput(){
    this.inputype='password'
  }
  getRealWord(e:KeyboardEvent){
    const currentText =(e.target as HTMLInputElement)
    console.log(currentText.value);

  }

}
