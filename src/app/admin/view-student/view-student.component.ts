import { Dialog } from '@angular/cdk/dialog';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { StudentService } from 'src/app/services/student.service';
import { EditStudentComponent } from '../edit-student/edit-student.component';



@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent  implements OnInit {
  students: any;

    year: any[]=["2010-11","2011-12","2012-13","2013-14","2014-15"];
    section: any [] = ["A","B","C","D"];
    class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
    constructor(private studentservice:StudentService,
      private http:HttpClient,
      private adminservice:AdminService,
      private fb :FormBuilder,
      private dialog:MatDialog
      ) { }
 
  RegistrationForm !: FormGroup;
  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      studentid : ['',[Validators.required]],
      name :['',[Validators.required]],
      fathername :['', [Validators.required]],
      gender :['',[Validators.required]],
      dob :['', [Validators.required]],
      doj : ['', [Validators.required]],
      classs :['',[Validators.required]],
      section :['',[Validators.required]],
      address : ['',[Validators.required]],
      mobileno :['',[Validators.required]],
      academicyear :['',[Validators.required]]
    })
    this.adminservice.Viewstudent().subscribe((res)=>{
      this.students=res
    })
       }
       deletestudent(id:any){
        this.adminservice.Deletestudent(id).subscribe((res:any)=>{
          alert('deleted')
          window.location.reload()
        })
       }
       Editstudent(student:any){
        this.dialog.open(EditStudentComponent,{
          width:'100%',
        
          data:student
        })
       }
}
