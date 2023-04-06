import { Component, Inject, OnInit    } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit {
  year: any[]=["2010-11","2011-12","2012-13","2013-14","2014-15"];
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  constructor(private fb:FormBuilder,private router:Router,private adminservice:AdminService,
    @Inject(MAT_DIALOG_DATA) public data : any
    ){ 
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
    this.RegistrationForm.patchValue({
      studentid : this.data.studentid,
      name :this.data.name,
      fathername:this.data.fathername,
      gender:this.data.gender,
      dob:this.data.dob,
      doj:this.data.doj,
      classs:this.data.classs,
      section:this.data.section,
      address:this.data.mobileno,
      academicyear:this.data.academicyear

    })
       }
       Editstudent(){
        let s=JSON.parse(localStorage.getItem('student')!)
        let e={
          studentid : this.RegistrationForm.get('studentid')?.value,
          name : this.RegistrationForm.get('name')?.value,
          fathername : this.RegistrationForm.get('fathername')?.value,
          gender : this.RegistrationForm.get('gender')?.value,
          dob : this.RegistrationForm.get('dob')?.value,
          doj : this.RegistrationForm.get('doj')?.value,
          classs : this.RegistrationForm.get('classs')?.value,
          section : this.RegistrationForm.get('section')?.value,
          address : this.RegistrationForm.get('address')?.value,
          academicyear : this.RegistrationForm.get('academicyear')?.value,
        }
        this.adminservice.Editstudent(s._id,e).subscribe((res:any)=>{
          window.location.reload()
          alert('updated successfully')
          console.log(res);


        })
       }
      }