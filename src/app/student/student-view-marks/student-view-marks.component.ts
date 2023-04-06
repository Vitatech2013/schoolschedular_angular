
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';


@Component({
  selector: 'app-student-view-marks',
  templateUrl: './student-view-marks.component.html',
  styleUrls: ['./student-view-marks.component.scss']
})
export class StudentViewMarksComponent implements OnInit{
  exam:any;
  student:any;
  MarksForm !: FormGroup;
  constructor(private studentservice:StudentService ,
    private http:HttpClient,
    private fb:FormBuilder) { }

    

    type :any[]=["1st Unit Test","2nd Unit Test","3rd Unit Test","Quarterly Exam","Half yearly Exam","Final Exam"];
    ngOnInit(): void {
    this.student=JSON.parse(localStorage.getItem('student')!)

    this.MarksForm=this.fb.group({
      type:['',[Validators.required]]
    })
    }
    search(){
      this.studentservice.Viewmarks(this.student.studentid,this.MarksForm.value.type).subscribe((res:any)=>{
        this.exam=res
        console.log(res);
      })
    }
    }


