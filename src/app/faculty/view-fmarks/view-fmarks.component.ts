
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';
import { MatDialog } from '@angular/material/dialog';
import { EditMarksComponent } from '../edit-marks/edit-marks.component';

@Component({
  selector: 'app-view-fmarks',
  templateUrl: './view-fmarks.component.html',
  styleUrls: ['./view-fmarks.component.scss']
})
export class ViewFmarksComponent  implements OnInit{
  marks: any;
  constructor(private facultyservice:FacultyService ,
    private http:HttpClient,
    private fb:FormBuilder,
    private dialog :MatDialog) { }
    MarksForm !: FormGroup;
    faculty:any
  
 section: any [] = ["A","B","C","D"];
 class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
 exam :any[]=["1st Unit Test","2nd Unit Test","3rd Unit Test","Quarterly Exam","Half yearly Exam","Final Exam"];
 ngOnInit(): void {
this.faculty=JSON.parse(localStorage.getItem('faculty')!)
    this.MarksForm=this.fb.group({
      classs:  ['',[Validators.required]],
      section :  ['',[Validators.required]],
      type:  ['',[Validators.required]],
    })
  }
  search(){
    let c = this.MarksForm.value.classs
    let s = this.MarksForm.value.section
    let t = this.MarksForm.value.type  
    let f = this.faculty.facultyid
       this.facultyservice.ViewMarks(c,s,t,f).subscribe((res:any)=>{
        this.marks=res
        console.log(res)
        
       });
  }
  EditMarks(  m:any){
    this.dialog.open(EditMarksComponent),{
      width : '60%',
      data : m
    }
    
  }
  DeleteMarks(marks:any){
    this.facultyservice.DeleteMarks(marks._id).subscribe((res:any)=>{
      alert('Deleted Successfully')
   
    })
  }
}



