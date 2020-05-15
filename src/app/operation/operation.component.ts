import { Component, OnInit, Input, Output,EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent  {
  @HostBinding('attr.class') val = 'operation';
  
  @Input()
  operation:any;

  @Output()
  delete = new EventEmitter<any>();

  constructor() { }

 askDelete(){
   this.delete.emit(this.operation);
 }

}
