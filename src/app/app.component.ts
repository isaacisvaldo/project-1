import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project- Sessão 4';
  inputText:string ='Texto Inicial'
  buttonTitle:string='Titulo do botão'
  buttonTitle2:string='Titulo do botão'
  DisabledButton:boolean=true
  DisabledButton2:boolean=false
  inputype:string='text'
  isDisable= false
  styleObject = {width:'100px', backgroundColor:'aqua'}
  styleObject2 = {width:'100px', backgroundColor:'red'}

  enableInput(){
    this.DisabledButton2=false
    this.DisabledButton=true
    this.isDisable= false
  }
  disableInput(){
   this. DisabledButton2=true
    this.DisabledButton=false
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
