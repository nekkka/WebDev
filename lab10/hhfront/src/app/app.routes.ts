import { Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { VacancyComponent } from './vacancy/vacancy.component';

export const routes: Routes = [
    {path: 'companies', component: CompanyComponent, title: 'Companies'},
    { path: ':companyId/vacancies', component: VacancyComponent, title: 'Vacancies' }
   // { path: ':companyId/top-vacancies', component: TopVacancyListComponent, title: 'Top Vacancies' },
    
];
