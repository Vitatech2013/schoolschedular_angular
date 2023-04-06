import { Component, Inject, OnInit    } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-edit-faculty',
  templateUrl: './edit-faculty.component.html',
  styleUrls: ['./edit-faculty.component.scss']
})

export class EditFacultyComponent implements OnInit {
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];   

  
  constructor(private fb:FormBuilder,private router:Router,private adminservice:AdminService,
    @Inject(MAT_DIALOG_DATA) public data : any
    ){ 
  }
  editFacultyForm !: FormGroup;

  ngOnInit(): void {
    console.log(this.data)
    this.editFacultyForm=this.fb.group({
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

    this.editFacultyForm.patchValue({
      facultyid : this.data.facultyid,
      name : this.data.name,
      fathername : this.data.fathername,
      gender :this.data.gender,
      emailid :this.data.emailid,
      dob :this.data.dob,
      doj :this.data.doj,
      experiance :this.data.experiance,
      subject :this.data.subject,
      address :this.data.address ,
      mobileno :this.data.mobileno,
    })
       }
      
       Editfaculty() {
        let f=JSON.parse(localStorage.getItem('faculty')!)
        let e={
     facultyid : this.editFacultyForm.get('facultyid')?.value,
      name : this.editFacultyForm.get('name')?.value,
      fathername :  this.editFacultyForm.get('fathername')?.value,
      gender : this.editFacultyForm.get('gender')?.value,
      emailid : this.editFacultyForm.get('emailid')?.value,
      dob : this.editFacultyForm.get('dob')?.value,
      doj : this.editFacultyForm.get('doj')?.value,
      experiance : this.editFacultyForm.get('experiance')?.value,
      subject : this.editFacultyForm.get('subject')?.value,
      address : this.editFacultyForm.get('address')?.value,
      mobileno : this.editFacultyForm.get('mobileno')?.value,
        }
          this.adminservice.Editfaculty(f._id,e).subscribe((res:any)=>{
            alert('Updated Successfully')
            window.location.reload()
            console.log(res);
            
          })
     }
    }
       





  

