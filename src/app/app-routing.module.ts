import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { TemplateAllFrontComponent } from './components/template-all-front/template-all-front.component';
import { TemplateAllBackComponent } from './components/template-all-back/template-all-back.component';

const routes: Routes = [
  {path:'',component:TemplateAllFrontComponent, children:[
    {path:'',component:HomeComponent},
    {path:'blog',component:ArticlesComponent},
    {path:'blog-details/:id',component:ArticleDetailsComponent},
    {path: 'register' ,component:RegisterComponent},
    {path: 'login' ,component:LoginComponent},
    {path: 'courses' ,component:CoursesComponent},
    {path: 'courses-details/:id' ,component:CourseDetailsComponent}
  ]},
  {path:'dashboard',component:TemplateAllBackComponent,children:[
    
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
