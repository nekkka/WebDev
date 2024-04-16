import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Company } from '../company';
import { DataService } from '../companyserver';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.css'
})
export class CompanyComponent implements OnInit {
  companies: Company[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies() {
    this.dataService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }
}