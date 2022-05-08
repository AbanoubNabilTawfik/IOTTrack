import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }

  topics=["Angular","React","Node"];
  userModel:User= new User("Ahmed","ab@gmail.com","1234567","Angular",true);

  ngOnInit(): void {
  }

}
