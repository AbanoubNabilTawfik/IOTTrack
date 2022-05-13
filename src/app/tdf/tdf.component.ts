import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { User } from '../user';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor(private enrollService:EnrollService) { }

  topics=["Angular","React","Node"];
  userModel:User= new User("","ab@gmail.com","","Angular",true);

  ngOnInit(): void {
  }

  SaveData()
  {
    //console.log(this.userModel);
    this.enrollService.enroll(this.userModel).subscribe(data=>
      {
        console.log(data)
      },
      error=>
      {
        console.log(error)
      })
  }

}
