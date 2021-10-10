import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ComponentsCalculator';

  theInput1 = 0;
  theInput2 = 0;
  theOperation = '';
  
  storeInput1(number1: string){
    this.theInput1 = Number(number1);
    // console.log(this.theInput1);
  }

  storeInput2(number2: string){
    this.theInput2 = Number(number2);
    // console.log(this.theInput2);
  }

  storeOperation(string1: string){
    this.theOperation = string1;
    // console.log(this.theOperation);
  }
}
