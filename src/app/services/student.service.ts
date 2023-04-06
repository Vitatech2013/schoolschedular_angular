import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient,) { }
studentLogin(studentid:any,mobileno:any){
    return this.http.get<any>(`http://localhost:1234/student/studentlogin?studentid=${studentid}&mobileno=${mobileno}`)
  };
  Viewprofile(studentid:any){
    return this.http.get<any>("http://localhost:1234/student/viewprofile?_id="+studentid)
  };
  Viewmarks(studentid:any,t:any){
    return this.http.get<any>("http://localhost:1234/student/viewmarks?studentid="+studentid+'&type='+t)
  }
}
