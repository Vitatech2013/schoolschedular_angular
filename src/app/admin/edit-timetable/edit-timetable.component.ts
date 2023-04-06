import { Component, Inject, OnInit    } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-edit-timetable',
  templateUrl: './edit-timetable.component.html',
  styleUrls: ['./edit-timetable.component.scss']
})
export class EditTimetableComponent implements OnInit{
  TTRegistrationForm !: FormGroup;
  fdata:any
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  subject: any = [ "Telugu", "Hindi","English","Maths","Physics","Social"];   
  day :any []=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ];
  constructor(private fb:FormBuilder,private router:Router,private adminservice:AdminService,
    @Inject(MAT_DIALOG_DATA) public data : any
    ){ 
  }
  ngOnInit(): void {
    this.adminservice.Viewfaculty().subscribe(res=>{
      this.fdata = res;
    })
    this.TTRegistrationForm=this.fb.group({
      day: ['',[Validators.required]],
      classs :['',[Validators.required]],
      section : ['',[Validators.required]],
      hour1 : ['9:30-10:30',[Validators.required]],
      hour2:  ['10:30-11:30',[Validators.required]],
      hour3 : ['11:30-12:30',[Validators.required]],
      hour4 : ['1:30-2:30',[Validators.required]],
      hour5 : ['2:30-3:30',[Validators.required]],
      hour6 :  ['3:30-4:30',[Validators.required]],
      faculty1 : ['',[Validators.required]],
      faculty2 : ['',[Validators.required]],
      faculty3 : ['',[Validators.required]],
      faculty4 :  ['',[Validators.required]],
      faculty5 : ['',[Validators.required]],
      faculty6 : ['',[Validators.required]],
      subject1 : ['',[Validators.required]],
      subject2 : ['',[Validators.required]],
      subject3 :  ['',[Validators.required]],
      subject4 :  ['',[Validators.required]],
      subject5 : ['',[Validators.required]],
      subject6 :  ['',[Validators.required]],
         })
        this.TTRegistrationForm.patchValue({
          day:this.data.day,
          classs:this.data.classs,
          section:this.data.section,
          faculty1 :this.data.faculty1,
          faculty2 : this.data.faculty2,
          faculty3 : this.data.faculty3,
          faculty4 :  this.data.faculty4,
          faculty5 : this.data.faculty5,
          faculty6 : this.data.faculty6,
          subject1 : this.data.subject1,
          subject2 : this.data.subject2,
          subject3 :  this.data.subject3,
          subject4 :  this.data.subject4,
          subject5 : this.data.subject5,
          subject6 :  this.data.subject6,
        })
  }
  EditTT(){
    let t ={
      day:this.TTRegistrationForm.get('day')?.value,
      classs:this.TTRegistrationForm.get('classs')?.value,
      section:this.TTRegistrationForm.get('section')?.value,
      faculty1:this.TTRegistrationForm.get('faculty1')?.value,
      faculty2:this.TTRegistrationForm.get('faculty2')?.value,
      faculty3:this.TTRegistrationForm.get('faculty3')?.value,
      faculty4:this.TTRegistrationForm.get('faculty4')?.value,
      faculty5:this.TTRegistrationForm.get('faculty5')?.value,
      faculty6:this.TTRegistrationForm.get('section6')?.value,
      subject1:this.TTRegistrationForm.get('subject1')?.value,
      subject2:this.TTRegistrationForm.get('subject2')?.value,
      subject3:this.TTRegistrationForm.get('subject3')?.value,
      subject4:this.TTRegistrationForm.get('subject4')?.value,
      subject5:this.TTRegistrationForm.get('subject5')?.value,
      subject6:this.TTRegistrationForm.get('subject6')?.value,
    }
    this.adminservice.editTT(this.data._id,t).subscribe((res:any)=>{
      console.log(res, "updtaed tt");
      
         alert('Updated successfully');
         
    })
  }

}
