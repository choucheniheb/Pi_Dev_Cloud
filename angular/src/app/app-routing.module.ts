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
import { OptionsListComponent } from './components/options-list/options-list.component';
import { OptionDetailsComponent } from './components/option-details/option-details.component';
import { UpdateOptionComponent } from './components/update-option/update-option.component';
import { OptionComponent } from './components/option/option.component';
import { CreateOptionComponent } from './components/create-option/create-option.component';
import { CreateModuleComponent } from './components/create-module/create-module.component';
import { ModuleComponent } from './components/module/module.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';

const routes: Routes = [
  {path:'',component:TemplateAllFrontComponent, children:[
    {path:'',component:HomeComponent},
    {path:'blog',component:ArticlesComponent},
    {path:'blog-details/:id',component:ArticleDetailsComponent},
    {path: 'register' ,component:RegisterComponent},
    {path: 'login' ,component:LoginComponent},
    {path: 'courses' ,component:CoursesComponent},
    {path: 'courses-details/:id' ,component:CourseDetailsComponent},
    {path: 'options' ,component:OptionsListComponent},
    {path: 'option-details/:id' ,component:OptionDetailsComponent},
    
  ]},

  {path:'dashboard',component:TemplateAllBackComponent},

    {path: 'updateoption/:id' ,component:UpdateOptionComponent},
    {path: 'all' ,component:OptionComponent},
    {path: 'createoption' ,component:CreateOptionComponent},
    {path: 'createmodule' ,component:CreateModuleComponent},
    {path: 'modules' ,component:ModuleComponent},
    {path: 'chat' ,component:ChatbotComponent},



    


    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
