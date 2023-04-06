import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-student-registration',
  templateUrl: './student-registration.component.html',
  styleUrls: ['./student-registration.component.scss']
})
export class StudentRegistrationComponent implements OnInit{
  year: any[]=["2010-11","2011-12","2012-13","2013-14","2014-15"];
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  constructor(private fb:FormBuilder,
    private router:Router,
    private adminservice:AdminService){ 
  }
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
       }

       Addstudent(){
        if(this.RegistrationForm.valid){
          this.adminservice.Addstudents(this.RegistrationForm.value).subscribe((res)=>{
            console.log(res)
            alert("Added Suceesfully");
            window.location.reload()

          })
        }else{
          alert("somthing Went Wrong");
        }
     }
      
    }
       