import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {

  constructor(private router:Router, private activatedRout:ActivatedRoute) { }
  departments =[
    {"name":"Angular","id":1},
    {"name":"React","id":2},
    {"name":"Node" ,"id":3},
    {"name":"JavaScript" , "id":4}
  ]
  selectId:any;
  ngOnInit(): void {
       this.activatedRout.paramMap.subscribe((params:ParamMap)=>{
         this.selectId=params.get("id");
       })
  }

  onSelect(deptId:any)
  {
    this.router.navigate(['/department',deptId])
  }

}
