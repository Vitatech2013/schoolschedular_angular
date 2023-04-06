import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent implements OnInit{
  constructor(private fb:FormBuilder,private router:Router,
    private studentservice :StudentService){
    
  }
  LoginForm !: FormGroup;
  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      studentid : new FormControl('', [Validators.required]),
      mobileno : new FormControl('',[Validators.required]),
 

    })
  }
 studentLogin() {
  let studentid =this.LoginForm.get('studentid')?.value;
  let mobileno =this.LoginForm.get('mobileno')?.value;
  this.studentservice.studentLogin(studentid,mobileno).subscribe((res)=>{
    if(res){
      localStorage.setItem('student',JSON.stringify(res));
      alert('login success')
      this.router.navigate(['/student-dashboard'])
    }else{
      alert('invalid credentials')
    }
  }) 
 
  }

}
// let facultyid =this.LoginForm.get('facultyid')?.value;
// let mobileno = this.LoginForm.get('mobileno')?.value;
// this.facultyservice.facultyLogin(facultyid,mobileno).subscribe((res)=>{
//   console.log(res)
//   if(res){
//     localStorage.setItem('faculty',JSON.stringify(res.body));
//     alert('Login success')
//     this.router.navigate(['/faculty-dashboard'])
//   }else{
//     alert("invalid credentials")
