import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit{

  constructor(private fb:FormBuilder,
    private router:Router,
    private adminservice:AdminService){
    
  }
  LoginForm !: FormGroup;
  ngOnInit(): void {
    this.LoginForm=this.fb.group({
      username : new FormControl('', [Validators.required]),
      password : new FormControl('',[Validators.required]),
    })
  }
 adminlogin() {
  let username =this.LoginForm.get('username')?.value;
  let password = this.LoginForm.get('password')?.value;

  this.adminservice.adminLogin(username,password).subscribe((res)=>{
    console.log(res)
    if(res){
    localStorage.setItem('admin',JSON.stringify(res.body));
    alert('Login success')
    this.router.navigate(['/admin-home'])
    }else{
      alert("invalid credentials")
    }
  })
 
  


  // console.log(this.LoginForm.value),
  // this.router.navigate(['/admin-home'])
  }
 
 }

  