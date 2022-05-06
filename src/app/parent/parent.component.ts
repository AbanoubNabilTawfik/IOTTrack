import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  constructor() { }
  @ViewChild(ChildComponent) child :ChildComponent= new ChildComponent();
  parentMessage:string="Hello child from parent";
  dataFromChild:string=""

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    this.child.whoAmI();
  }

}
