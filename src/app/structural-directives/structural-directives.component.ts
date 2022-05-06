import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  displayName:boolean=false;

  name:string="Ahmed"
  isLoggedIn:boolean=true;

  carName:string="Tipoo"

  persons=[
    {"name":"Ahmed" , "age":25},
    {"name":"Mohamed" , "age": 30},
    {"name":"Salma" , "age": 20},
    {"name":"Sara" , "age": 10}

  ]

  ngOnInit(): void {
  }

}
