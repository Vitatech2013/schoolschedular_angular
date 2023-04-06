import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FacultyService } from 'src/app/services/faculty.service';
@Component({
  selector: 'app-view-tt',
  templateUrl: './view-tt.component.html',
  styleUrls: ['./view-tt.component.scss']
})
export class ViewTTComponent implements OnInit {
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  timetable: any;
  constructor(private facultyservice:FacultyService ,
    private http:HttpClient,
    private fb:FormBuilder) { }
    TTsearchform !: FormGroup;

  ngOnInit(): void {
    this.TTsearchform=this.fb.group({
      day: new FormControl('',[Validators.required]),
      classs : new FormControl('',[Validators.required]),
      section : new FormControl('',[Validators.required]),
         })
        
  }
  search(){
    this.facultyservice.ViewTT(this.TTsearchform.value.classs,this.TTsearchform.value.section).subscribe((res:any)=>{
      this.timetable=res
      console.log(res);
     });
  }

}
