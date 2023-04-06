import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
 
  constructor(private fb:FormBuilder,private router:Router,private studentservice:StudentService){ 
  }
  students: any;
ngOnInit(): void {
  this.students=JSON.parse(localStorage.getItem('student')!)
  this.studentservice.Viewprofile(this.students._id).subscribe((res)=>{
    this.students=res;
    console.log(this.students);
    
   });
 
}
}


//   import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import { FacultyService } from 'src/app/services/faculty.service';

// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class ProfileComponent implements OnInit {;
//   constructor(){ 
//   }
// faculty:any













  

