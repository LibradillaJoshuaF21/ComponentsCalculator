import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css']
})
export class NumbersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() num1 = new EventEmitter<string>();
  @Output() num2 = new EventEmitter<string>();


  getNum1(string1: string){
    this.num1.emit(string1);
  }

  getNum2(string2: string){
    this.num2.emit(string2);
  }

}
