import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdminService } from 'src/app/services/admin.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTimetableComponent } from '../edit-timetable/edit-timetable.component';


@Component({
  selector: 'app-view-timetable',
  templateUrl: './view-timetable.component.html',
  styleUrls: ['./view-timetable.component.scss']
})
export class ViewTimetableComponent implements OnInit {
  section: any [] = ["A","B","C","D"];
  class: any[] = ["1","2","3","4","5","6","7","8","9","10"];
  day :any []=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday" ];

  timetable: any;
  constructor(private adminservice:AdminService ,
    private http:HttpClient,
    private fb:FormBuilder,
    private dialog:MatDialog) { }
    TTsearchform !: FormGroup;

  ngOnInit(): void {
    this.TTsearchform=this.fb.group({
      day: new FormControl('',[Validators.required]),
      classs : new FormControl('',[Validators.required]),
      section : new FormControl('',[Validators.required]),
         })
        
  }
  search(){
    this.adminservice.ViewTT(this.TTsearchform.value.classs,this.TTsearchform.value.section).subscribe((res:any)=>{
      this.timetable=res
      console.log(res);
     });
  }
  Delete(id:any){console.log(id)
    this.adminservice.DeleteTT(id).subscribe((res:any)=>{
      alert("deleted successfully ")
      window.location.reload()
    })
  }
  EditTT(t:any){
this.dialog.open(EditTimetableComponent,{
  width:'100%',
  data:t
})

  }
}
