import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  //@Input() parentData:string="";

  @Input('parentData') message:string="";

  @Output() childEvent = new EventEmitter();

  ngOnInit(): void {
  }
  sendData()
  {
    this.childEvent.emit("Hello parent from child")
  }

  whoAmI()
  {
    console.log("im child");
  }

}
