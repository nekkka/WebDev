import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Company } from './company';
import { Vacancy } from './vacancy';
import { DataService } from './companyserver';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hhfront';
  companies: Company[] = [];
  vacancies: Vacancy[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.dataService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  
}