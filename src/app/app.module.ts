import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TemplateAllFrontComponent } from './components/template-all-front/template-all-front.component';
import { TemplateAllBackComponent } from './components/template-all-back/template-all-back.component';
import { FooterBackComponent } from './components/footer-back/footer-back.component';
import { NavBarDashboardComponent } from './components/nav-bar-dashboard/nav-bar-dashboard.component';
import { SideBarDashboardComponent } from './components/side-bar-dashboard/side-bar-dashboard.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectAddComponent } from './subject-add/subject-add.component';
import { SubjectUpdateComponent } from './subject-update/subject-update.component';
import { ServicebysubjectComponent } from './servicebysubject/servicebysubject.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ServiceUpdateComponent } from './service-update/service-update.component';
import { RessourcesListComponent } from './ressources-list/ressources-list.component'; // Import MatDialogModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    RegisterComponent,
    LoginComponent,
    CoursesComponent,
    SubjectListComponent,
    SubjectAddComponent,
    SubjectUpdateComponent,
    CourseDetailsComponent,
    TemplateAllFrontComponent,
    TemplateAllBackComponent,
    SideBarDashboardComponent,
    NavBarDashboardComponent,
    FooterBackComponent,
    ServicebysubjectComponent,
    ServiceUpdateComponent,
    RessourcesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    MatDialogModule, // Include MatDialogModule here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
