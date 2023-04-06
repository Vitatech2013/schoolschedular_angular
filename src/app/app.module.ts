import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FacultyRegistrationComponent } from './admin/faculty-registration/faculty-registration.component';
import { ViewFacultyComponent } from './admin/view-faculty/view-faculty.component';
import { StudentRegistrationComponent } from './admin/student-registration/student-registration.component';
import { ViewStudentComponent } from './admin/view-student/view-student.component';
import { AddTimetableComponent } from './admin/add-timetable/add-timetable.component';
import { ViewTimetableComponent } from './admin/view-timetable/view-timetable.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ProfileComponent } from './faculty/profile/profile.component';
import { ViewTTComponent } from './faculty/view-tt/view-tt.component';
import { AddMarksComponent } from './faculty/add-marks/add-marks.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './home/admin-login/admin-login.component';
import { FacultyLoginComponent } from './home/faculty-login/faculty-login.component';
import { StudentLoginComponent } from './home/student-login/student-login.component';
import { FacultyDashboardComponent } from './faculty/faculty-dashboard/faculty-dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './student/student-dashboard/student-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminViewMarksComponent } from './admin/admin-view-marks/admin-view-marks.component';
import { StudentProfileComponent } from './student/student-profile/student-profile.component';
import { EditFacultyComponent } from './admin/edit-faculty/edit-faculty.component';
import { EditStudentComponent } from './admin/edit-student/edit-student.component';
import { EditTimetableComponent } from './admin/edit-timetable/edit-timetable.component';
import { ViewFstudentComponent } from './faculty/view-fstudent/view-fstudent.component';
import { ViewFmarksComponent } from './faculty/view-fmarks/view-fmarks.component';
import { StudentViewMarksComponent } from './student/student-view-marks/student-view-marks.component';
import { EditMarksComponent } from './faculty/edit-marks/edit-marks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FacultyRegistrationComponent,
    ViewFacultyComponent,
    StudentRegistrationComponent,
    ViewStudentComponent,
    AddTimetableComponent,
    ViewTimetableComponent,
    ProfileComponent,
    ViewTTComponent,
    AddMarksComponent,
    AdminHomeComponent,
    AdminLoginComponent,
    FacultyLoginComponent,
    StudentLoginComponent,
    FacultyDashboardComponent,
    HeaderComponent,
    StudentDashboardComponent,
    AdminViewMarksComponent,
    StudentProfileComponent,
    EditFacultyComponent,
    EditStudentComponent,
    EditTimetableComponent,
    ViewFstudentComponent,
    ViewFmarksComponent,
    StudentViewMarksComponent,
    EditMarksComponent
    

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
