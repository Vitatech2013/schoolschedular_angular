import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FacultyService } from 'src/app/services/faculty.service';

@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.scss']
})
export class FacultyLoginComponent implements OnInit {
  constructor(private fb:FormBuilder,private router:Router, private facultyservice:FacultyService){
  }
  LoginForm !: FormGroup;
  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      facultyid : new FormControl('', [Validators.required]),
      mobileno : new FormControl('',[Validators.required]),
    })
  }

 facultyLogin() {
  let facultyid =this.LoginForm.get('facultyid')?.value;
  let mobileno = this.LoginForm.get('mobileno')?.value;
  this.facultyservice.facultyLogin(facultyid,mobileno).subscribe((res)=>{
    console.log(res)
    if(res){
      localStorage.setItem('faculty',JSON.stringify(res));
      alert('Login success')
      this.router.navigate(['/faculty-dashboard'])
    }else{
      alert("invalid credentials")
    }
  })
 }
}