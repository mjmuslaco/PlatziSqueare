import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PlatziSquare';
  nombre ="";
  listo =  false;
  
  constructor(){
    setTimeout(()=>{
      this.listo =  true;
    },300);
  }
  hacerAlgo(){
    alert("Haciendo algo");
  }
}
