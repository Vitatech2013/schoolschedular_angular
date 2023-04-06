import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTimetableComponent } from './admin/add-timetable/add-timetable.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { FacultyRegistrationComponent } from './admin/faculty-registration/faculty-registration.component';
import { StudentRegistrationComponent } from './admin/student-registration/student-registration.component';
import { ViewFacultyComponent } from './admin/view-faculty/view-faculty.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { ViewTimetableComponent } from './admin/view-timetable/view-timetable.component';
import { AddMarksComponent } from './faculty/add-marks/add-marks.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { ProfileComponent } from './faculty/profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { FacultyLoginComponent } from './home/faculty-login/faculty-login.component';
import { HomeComponent } from './home/home.component';
import { StudentLoginComponent } from './home/student-login/student-login.component';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { AdminViewMarksComponent } from './admin/admin-view-marks/admin-view-marks.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { ViewFstudentComponent } from './faculty/view-fstudent/view-fstudent.component';
import { ViewTTComponent } from './faculty/view-tt/view-tt.component';
import { ViewFmarksComponent } from './faculty/view-fmarks/view-fmarks.component';
import { StudentViewMarksComponent } from './student/student-view-marks/student-view-marks.component';


const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header',component:HeaderComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'faculty-login',component:FacultyLoginComponent},
  {path:'student-login',component:StudentLoginComponent},
  {path:'home',component:HomeComponent},
  {path:'admin-home',component:AdminHomeComponent, children:[
    {path:'faculty-registration',component:FacultyRegistrationComponent},
    {path:'view-faculty',component:ViewFacultyComponent},
    {path:'student-registration',component:StudentRegistrationComponent},
    {path:'view-student',component:ViewStudentComponent},
    {path:'add-timetable',component:AddTimetableComponent},
    {path:'view-timetable',component:ViewTimetableComponent},
    {path:'admin-view-marks',component:AdminViewMarksComponent},
  ]},
  {path:'faculty-dashboard',component:FacultyDashboardComponent, children:[
    {path:'faculty-profile',component:ProfileComponent},
    {path:'view-fstudent',component:ViewFstudentComponent},
    {path:'view-tt',component:ViewTTComponent},
    {path:'add-marks',component:AddMarksComponent},
    {path:'view-fmarks',component:ViewFmarksComponent},
  ]},
  {path:'student-dashboard',component:StudentDashboardComponent,children:[
    {path:'student-profile',component:StudentProfileComponent},
    {path:'view-tt',component:ViewTTComponent},
    {path:'view-student-marks',component:StudentViewMarksComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
