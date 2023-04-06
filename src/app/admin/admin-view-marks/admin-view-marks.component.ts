import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-view-marks',
  templateUrl: './admin-view-marks.component.html',
  styleUrls: ['./admin-view-marks.component.scss']
})
export class AdminViewMarksComponent implements OnInit{
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  exam:any[]=["1st Unit Test","2nd Unit Test","3rd Unit Test","Quarterly Exam","Half yearly Exam","Final Exam"];
  marks: any;
  MarksForm!:FormGroup
  constructor(
    private http:HttpClient,
    private adminservice:AdminService,
    private fb : FormBuilder) { }
  ngOnInit(): void {
    this.MarksForm=this.fb.group({
      classs:  ['',[Validators.required]],
      section :  ['',[Validators.required]],
      type:  ['',[Validators.required]],
    
    });

  }
search(){
  let c = this.MarksForm.value.classs
  let s = this.MarksForm.value.section
  let t = this.MarksForm.value.type 
this.adminservice.Viewmarks(c,s,t).subscribe((res:any)=>{
  this.marks=res
  console.log(res)
})
}
}



