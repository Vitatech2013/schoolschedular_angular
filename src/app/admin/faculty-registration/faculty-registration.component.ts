import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';



@Component({
  selector: 'app-faculty-registration',
  templateUrl: './faculty-registration.component.html',
  styleUrls: ['./faculty-registration.component.scss']
})
export class FacultyRegistrationComponent implements OnInit {
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];


  constructor(private fb:FormBuilder,private router:Router,private adminservice:AdminService){ 
  }
RegistrationForm !: FormGroup;
  ngOnInit(): void {
    this.RegistrationForm=this.fb.group({
      facultyid : ['',[Validators.required]],
      name :['',[Validators.required]],
      fathername :['', [Validators.required]],
      gender :['',[Validators.required]],
      emailid : ['',[Validators.required]],
      dob :['', [Validators.required]],
      doj : ['', [Validators.required]],
      experiance :['',[Validators.required]],
      subject :['',[Validators.required]],
      address : ['',[Validators.required]],
      mobileno :['',[Validators.required]],
    })
       }

       Addfaculty(){
        if(this.RegistrationForm.valid){
          this.adminservice.Addfaculty(this.RegistrationForm.value).subscribe((res)=>{
            alert("Added Suceesfully");
            window.location.reload()
          })
        }else{
          alert("somthing Went Wrong");
        }
     }
    
    }
       




  
