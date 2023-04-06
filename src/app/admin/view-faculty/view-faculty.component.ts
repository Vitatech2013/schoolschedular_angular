import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacultyService } from 'src/app/services/faculty.service';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditFacultyComponent } from '../edit-faculty/edit-faculty.component';

@Component({
  selector: 'app-view-faculty',
  templateUrl: './view-faculty.component.html',
  styleUrls: ['./view-faculty.component.scss']
})
export class ViewFacultyComponent implements OnInit {
  facultyList: any;
  faculty: any;
  constructor(private facultyservice:FacultyService ,
    private http:HttpClient,
    private adminservice:AdminService,
    private fb :FormBuilder,
    private matdialog:MatDialog
    ) { }

  RegistrationForm !: FormGroup;
  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      facultyid : ['',[Validators.required]],
      facultyname :['',[Validators.required]],
      fathername :['', [Validators.required]],
      gender :['',[Validators.required]],
      email : ['',[Validators.required]],
      dob :['', [Validators.required]],
      dateofjoin : ['', [Validators.required]],
      experiance :['',[Validators.required]],
      subject :['',[Validators.required]],
      address : ['',[Validators.required]],
      mobile :['',[Validators.required]],
    });

    this.adminservice.Viewfaculty().subscribe((res)=>{
      this.facultyList=res
      console.log(res);
     });
       }
       editfaculty(faculty:any){
        this.matdialog.open(EditFacultyComponent,
        {
          width:'80%',
          data :faculty
        })
      
       }
       deletefaculty(faculty_id:any){
        this.adminservice.Deletefaculty(faculty_id).subscribe((res:any)=>{
          window.location.reload()
        })

       }
      
      }



   
     
    

