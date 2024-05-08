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
import { EvenementComponent } from './components/evenement/evenement.component';
import { EvenementDetailsComponent } from './components/evenement-details/evenement-details.component';
import { CreateReservComponent } from './components/create-reserv/create-reserv.component';
import { CreateAvisComponent } from './components/create-avis/create-avis.component';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { MeetingRoomComponent } from './components/meeting-room/meeting-room.component';
import { AllArticleDashboardComponent } from './components/all-article-dashboard/all-article-dashboard.component';
import { OptionsListComponent } from './components/options-list/options-list.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { OptionDetailsComponent } from './components/option-details/option-details.component';
import { CreateUniteEnseignementComponent } from './components/create-unite-enseignement/create-unite-enseignement.component';
import { CreateOptionComponent } from './components/create-option/create-option.component';
import { CreateEventComponent } from './components/create-event/create-event.component';
import { StatReservationComponent } from './components/stat-reservation/stat-reservation.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AuthGuard } from './auth.guard';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateArticleComponent } from './components/update-article/update-article.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { OptionsListDashboardComponent } from './components/options-list-dashboard/options-list-dashboard.component';
import { UpdateOptionComponent } from './components/update-option/update-option.component';
import { UpdateUeComponent } from './components/update-ue/update-ue.component';
import { UeListComponent } from './components/ue-list/ue-list.component';
import { CreateSubjectComponent } from './components/create-subject/create-subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { UpdateSubjectComponent } from './components/update-subject/update-subject.component';
import { CreateServiceComponent } from './components/create-service/create-service.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { UpdateServiceComponent } from './components/update-service/update-service.component';
import { AddRessourceComponent } from './components/add-ressource/add-ressource.component';
import { RessourceListComponent } from './components/ressource-list/ressource-list.component';
import { CalculeScoreComponent } from './components/calcule-score/calcule-score.component';
import { EventListComponent } from './components/event-list/event-list.component';
import { UpdateEventComponent } from './components/update-event/update-event.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateAllFrontComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'blog',
        component: ArticlesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'blog-details/:id',
        component: ArticleDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      {
        path: 'courses',
        component: CoursesComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'courses-details/:id',
        component: CourseDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'evenement',
        component: EvenementComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'evenement-details/:id',
        component: EvenementDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      { path: 'create-reservation/:id', component: CreateReservComponent },
      {
        path: 'create-avis/:id',
        component: CreateAvisComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      { path: 'meeting-rooom', component: MeetingRoomComponent },
      {
        path: 'options',
        component: OptionsListComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'chat-bot',
        component: ChatbotComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'option-details/:id',
        component: OptionDetailsComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
      {
        path: 'calcule-score',
        component: CalculeScoreComponent,
        canActivate: [AuthGuard],
        data: { roles: ['ROLE_USER', 'ROLE_ADMIN'] },
      },
    ],
  },
  {
    path: 'dashboard',
    component: TemplateAllBackComponent,
    children: [
      { path: '', component: TemplateAllBackComponent },
      { path: 'create-article', component: CreateArticleComponent },
      { path: 'all-article', component: AllArticleDashboardComponent },
      {
        path: 'create-unite-enseignement',
        component: CreateUniteEnseignementComponent,
      },
      { path: 'create-option', component: CreateOptionComponent },
      { path: 'create-event', component: CreateEventComponent },
      { path: 'stat-reservation', component: StatReservationComponent },
      { path: 'all-reservation', component: ReservationsComponent },
      { path: 'all-users', component: UserListComponent },
      { path: 'update-blog/:id', component: UpdateArticleComponent },
      { path: 'update-user/:id', component: UpdateUserComponent },
      { path: 'all-Options', component: OptionsListDashboardComponent },
      { path: 'update-option/:id', component: UpdateOptionComponent },
      { path: 'create-subject', component: CreateSubjectComponent },
      { path: 'all-subject', component: SubjectListComponent },
      { path: 'update-subject/:id', component: UpdateSubjectComponent },
      { path: 'create-service', component: CreateServiceComponent },
      { path: 'all-service', component: ServiceListComponent },
      { path: 'update-service/:id', component: UpdateServiceComponent },
      { path: 'upload-ressource', component: AddRessourceComponent },
      { path: 'all-ressource', component: RessourceListComponent },
      { path: 'event-list', component: EventListComponent },
      { path: 'update-event/:id', component: UpdateEventComponent },
      {
        path: 'update-unite-enseignement/:id',
        component: UpdateUeComponent,
      },
      {
        path: 'all-unite-enseignement',
        component: UeListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
