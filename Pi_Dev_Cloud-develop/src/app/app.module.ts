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
import { StatroleComponent } from './components/statrole/statrole.component';

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
    CourseDetailsComponent,
    TemplateAllFrontComponent,
    TemplateAllBackComponent,
    SideBarDashboardComponent,
    NavBarDashboardComponent,
    FooterBackComponent,
    StatroleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
