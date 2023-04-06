import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';

import { FacultyService } from 'src/app/services/faculty.service';
@Component({
  selector: 'app-view-fstudent',
  templateUrl: './view-fstudent.component.html',
  styleUrls: ['./view-fstudent.component.scss']
})
export class ViewFstudentComponent implements OnInit {
  students: any;
  year: any[]=["2010-11","2011-12","2012-13","2013-14","2014-15"];
 section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
constructor(private facultyservice:FacultyService,
private http:HttpClient,
private fb :FormBuilder
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
    this.facultyservice.Viewstudent().subscribe((res)=>{
      this.students=res
    })
}
}