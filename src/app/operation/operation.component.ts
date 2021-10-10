import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output() operation = new EventEmitter<any>();

  addOperation(){
    this.operation.emit('+');
  }

  subtractOperation(){
    this.operation.emit('-');
  }

  multiplyOperation(){
    this.operation.emit('*');
  }

  divideOperation(){
    this.operation.emit('/');
  }
}
