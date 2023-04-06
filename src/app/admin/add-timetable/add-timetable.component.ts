import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-add-timetable',
  templateUrl: './add-timetable.component.html',
  styleUrls: ['./add-timetable.component.scss']
})
export class AddTimetableComponent implements OnInit{
  fdata:any;

  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];   
  day :any []=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ];
  constructor(private fb:FormBuilder,
    private router:Router,
    private adminservice:AdminService,
    private http:HttpClient){ 
  }
TTRegistrationForm !: FormGroup;
  ngOnInit(): void {
    this.TTRegistrationForm=this.fb.group({
      day: new FormControl('',[Validators.required]),
      classs : new FormControl('',[Validators.required]),
      section : new FormControl('',[Validators.required]),
      hour1 : new FormControl('09:30-10:30',[Validators.required]),
      hour2 : new FormControl('10:30-11:30',[Validators.required]),
      hour3 : new FormControl('11:30-12:30',[Validators.required]),
      hour4 : new FormControl('01:30-02:30',[Validators.required]),
      hour5 : new FormControl('02:30-03:30',[Validators.required]),
      hour6 : new FormControl('03:30-04:30',[Validators.required]),
      faculty1 : new FormControl('',[Validators.required]),
      faculty2 : new FormControl('',[Validators.required]),
      faculty3 : new FormControl('',[Validators.required]),
      faculty4 : new FormControl('',[Validators.required]),
      faculty5 : new FormControl('',[Validators.required]),
      faculty6 : new FormControl('',[Validators.required]),
      subject1 : new FormControl('',[Validators.required]),
      subject2 : new FormControl('',[Validators.required]),
      subject3 : new FormControl('',[Validators.required]),
      subject4 : new FormControl('',[Validators.required]),
      subject5 : new FormControl('',[Validators.required]),
      subject6 : new FormControl('',[Validators.required]),
         })
         this.getfaculty();
       }
       register(){
        console.log(this.TTRegistrationForm.value);
        
        if(this.TTRegistrationForm.valid){
           this.adminservice.AddTT(this.TTRegistrationForm.value).subscribe((res)=>{
            alert("Added Suceesfully");
          })
        }else{
          alert("something went wrong")
        }
       }
getfaculty(){
  this.adminservice.Viewfaculty().subscribe(res=>{
    this.fdata = res;
  })
}
     

}
