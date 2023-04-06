import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private http:HttpClient) { }

  adminLogin(u:any,p:any){
    return this.http.get<any>(`http://localhost:1234/admin/adminlogin?username=${u}&password=${p}`)
  }
  Addfaculty(data:any){
    return this.http.post<any>("http://localhost:1234/admin/fregistration",data)  
  };
  Viewfaculty(){
    return this.http.get<any>("http://localhost:1234/admin/fview")
  };
  Editfaculty(id:any,data:any){
    return this.http.put<any>("http://localhost:1234/admin/fupdate/"+id,data)
   };
   Deletefaculty(id:any){
     return this.http.delete<any>("http://localhost:1234/admin/fdelete/"+id)
  };
   Addstudents(data:any){
     return this.http.post<any>("http://localhost:1234/admin/sregistration",data)  
  };
   Viewstudent(){
     return this.http.get<any>("http://localhost:1234/admin/sview")
 };
   Editstudent(id:any,data:any){
    return this.http.put<any>("http://localhost:1234/admin/supdate/"+id,data)
 };
  Deletestudent(id:any){
     return this.http.delete("http://localhost:1234/admin/sdelete/"+id)
   };
  AddTT(data:any){
    return this.http.post<any>("http://localhost:1234/admin/ttadd",data)  
  };
  ViewTT(c:any,s:any){
     return this.http.get<any>("http://localhost:1234/admin/ttview?classs="+c+'&section='+s)
   };
   editTT(id:any,data:any){
        return this.http.put<any>("http://localhost:1234/admin/ttupdate/"+id,data)
   };
   DeleteTT(id:any){
    return this.http.delete("http://localhost:1234/admin/ttdelete/"+id)
   }
   Viewmarks(c:any,s:any,t:any){
    return this.http.get<any>("http://localhost:1234/admin/viewmarks?classs="+c+'&section='+s+'&type='+t)
   }


    
  }
