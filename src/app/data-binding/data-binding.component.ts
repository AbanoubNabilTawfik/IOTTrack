import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  fullName:string="Abanoub Nabil";
  _url:string=window.location.href;
  textId:string="myId2";
  isDisabled:boolean=false;

  textColor:string="text-danger";
  hasError:boolean=false;
  isSpecial:boolean=true;

  messageClasses={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  myStyles={
    color:"red",
    fontStyle:"italic"
  }

  ngOnInit(): void {
  }

}
