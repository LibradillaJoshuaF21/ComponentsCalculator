import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.calculate();
  }

  result = 0;

  @Input() input1 = 0;
  @Input() input2 = 0;
  @Input() operation = '';
  
  calculate(){
    switch(this.operation){
      case '+': this.result = this.input1+this.input2; break;
      case '-': this.result = this.input1-this.input2; break;
      case '/': this.result = this.input1/this.input2; break;
      case '*': this.result = this.input1*this.input2; break;
    }
  }
}
