import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {;
  constructor(private fb:FormBuilder,private router:Router,private facultyservice:FacultyService){ 
  }
facultys:any
  ngOnInit(): void {
    let f=JSON.parse(localStorage.getItem('faculty')!)._id

    console.log(f)
    this.facultyservice.Viewprofile(f).subscribe((res)=>{
      this.facultys=res;
      console.log(this.facultys);
      
     });
   
  }
  }












  

