import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-edit-marks',
  templateUrl: './edit-marks.component.html',
  styleUrls: ['./edit-marks.component.scss']
})
export class EditMarksComponent implements OnInit{
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];

  exams :any[]=["1st Unit Test","2nd Unit Test","3rd Unit Test","Quarterly Exam","Half yearly Exam","Final Exam"];
  timetable: any;
  AddmarksForm ! : FormGroup
  allStudent:any
  student:any
  constructor( 
    private http:HttpClient ,
     private facultyservice :FacultyService,
     private fb : FormBuilder
     ) { 
      this.facultyservice.Viewstudent().subscribe((res:any)=>{
        this.allStudent=res
      })
     }
  ngOnInit(): void {
       
    this.AddmarksForm=this.fb.group({
      studentid :  ['',[Validators.required]],
      name :  ['',[Validators.required]],
      classs:  ['',[Validators.required]],
      section :  ['',[Validators.required]],
      subject :  ['',[Validators.required]],
      type : ['',[Validators.required]],
      marks : ['',[Validators.required]],

    })

  }
  isStudent(a:any){
    this.student=this.allStudent.find((res:any)=>res.studentid==a.target.value)
    console.log(this.student);
    
    this.AddmarksForm.patchValue({
      name:this.student.name,
      classs:this.student.classs,
      section:this.student.section
    })
  
  }
  Editmarks(){
         let e = {
          name : this.AddmarksForm.get('name')?.value,
          classs : this.AddmarksForm.get('classs')?.value,
          section : this.AddmarksForm.get('section')?.value
         }
         this.facultyservice.EditMarks(this.allStudent.id,e).subscribe((res:any)=>{
          alert('Updated successfully')
          window.location.reload()

         })
  }
  }

