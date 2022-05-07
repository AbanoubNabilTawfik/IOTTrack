import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IEmployee } from './IEmployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }
 employees:IEmployee[]=[]
 _url="/assets/Data/employees.json";
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError((err)=>{
      return throwError(()=> err.message || "Server Error");
    }))
    //this.http.post(this._url,body)
  }
}
