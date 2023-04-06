

import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';
import { TimetableService } from 'src/app/services/timetable.service';


@Component({
  selector: 'app-add-marks',
  templateUrl: './add-marks.component.html',
  styleUrls: ['./add-marks.component.scss']
})
export class AddMarksComponent implements OnInit {
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];

  exams :any[]=["1st Unit Test","2nd Unit Test","3rd Unit Test","Quarterly Exam","Half yearly Exam","Final Exam"];
  timetable: any;
  AddmarksForm ! : FormGroup
  allStudent:any
  student:any
  f:any
  result:any;
  totalmarks:any
  constructor(private TT:TimetableService  ,
    private http:HttpClient ,
     private facultyservice :FacultyService,
     private fb : FormBuilder
     ) { 
       this.f=JSON.parse(localStorage.getItem('faculty')!)
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
  Addmarks(){

    let marks=this.AddmarksForm.value.marks
    let type=this.AddmarksForm.value.type
    if(type == "1st Unit Test" || type == "2nd Unit Test" || type == "3rd Unit Test") {
      this.totalmarks = 25;
  }
  else if(type == "Quarterly Exam" || type == "Half Yearly Exam" || type == "Final Exam") {
      this.totalmarks = 100;
  }
  const avg = (parseFloat(marks) / this.totalmarks) * 100;        
  if(avg>=75) {
      this.result="A";
  }
  else if(avg>=60 && avg<75) {
      this.result="B";
  }
  else if(avg>=45 && avg<60) {
      this.result="C";
  }
  else if(avg>=35 && avg<45) {
      this.result="D";
  }
  else {
      this.result="Fail";
  }
    let data={
      ...this.AddmarksForm.value,
      facultyid:this.f.facultyid,
      result:this.result,
      totalmarks:this.totalmarks
    }

    if(this.AddmarksForm.valid){
      this.facultyservice.AddMarks(data).subscribe((res)=>{
        console.log(res)
        alert("added successfully")
        window.location.reload()
      })
    }else{
      alert("something went wrong")
    }
  }
}



