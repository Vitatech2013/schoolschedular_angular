import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http:HttpClient,) { }
  facultyLogin(facultyid:any,mobileno:any){
    return this.http.get<any>(`http://localhost:1234/faculty/facultylogin?facultyid=${facultyid}&mobileno=${mobileno}`)
  };
  Viewprofile(facultyid:any){
    return this.http.get<any>("http://localhost:1234/faculty/viewprofile?_id="+facultyid)
  };
  Viewstudent(){
    return this.http.get<any>("http://localhost:1234/faculty/viewstudents")
};
ViewTT(c:any,s:any){
  return this.http.get<any>("http://localhost:1234/faculty/viewtimetable?classs="+c+'&section='+s)
};
AddMarks(data:any){
    return this.http.post<any>("http://localhost:1234/faculty/addmarks",data)
  };
  ViewMarks(c:any,s:any,t:any,f:any){
    return this.http.get("http://localhost:1234/faculty/viewmarks?classs="+c+'&section='+s+'&type='+t+'&facultyid='+f)
  };
  EditMarks(id:any,data:any){
    return this.http.put("http://localhost:1234/faculty/updatemarks/"+id,data)
  }
  DeleteMarks(id:any){
    return this.http.delete("http://localhost:1234/faculty/deletemarks/"+id)
  }
  


}
