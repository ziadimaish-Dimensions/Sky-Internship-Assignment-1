import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { HighlightPipe } from './highlight.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, EmployeeCardComponent, HighlightPipe],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // this holds the search input
  searchTerm: string = '';
  //employees data
  employees = [
    {
      name: 'John Doe',
      submittedOn: '2/3/2024',
      duration: '1 Week (15/11/2023 - 21/4/2024)',
      salary: '1500 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Sarah Johnson',
      submittedOn: '12/3/2024',
      duration: '1 Week (15/11/2023 - 21/11/2023)',
      salary: '1400 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'William Davis',
      submittedOn: '13/3/2024',
      duration: '3 Weeks (1/12/2023 - 21/12/2023)',
      salary: '2100 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Emma Wilson',
      submittedOn: '14/3/2024',
      duration: '2 Weeks (1/1/2024 - 14/1/2024)',
      salary: '1700 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Noah Martinez',
      submittedOn: '15/3/2024',
      duration: '1 Week (15/1/2024 - 21/1/2024)',
      salary: '1300 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Isabella Anderson',
      submittedOn: '16/3/2024',
      duration: '4 Weeks (1/2/2024 - 29/2/2024)',
      salary: '2400 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Mason Taylor',
      submittedOn: '17/3/2024',
      duration: '3 Weeks (1/3/2024 - 21/3/2024)',
      salary: '2000 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Mia Brown',
      submittedOn: '18/3/2024',
      duration: '2 Weeks (1/4/2024 - 14/4/2024)',
      salary: '1600 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Liam Lee',
      submittedOn: '19/3/2024',
      duration: '1 Week (15/4/2024 - 21/4/2024)',
      salary: '1200 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Charlotte Smith',
      submittedOn: '20/3/2024',
      duration: '3 Weeks (1/5/2024 - 21/5/2024)',
      salary: '1900 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Benjamin Doe',
      submittedOn: '21/3/2024',
      duration: '2 Weeks (1/6/2024 - 14/6/2024)',
      salary: '1800 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Michael Johnson',
      submittedOn: '4/3/2024',
      duration: '2 Weeks (1/6/2023 - 14/6/2023)',
      salary: '1800 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Emily Davis',
      submittedOn: '5/3/2024',
      duration: '1 Week (15/6/2023 - 21/6/2023)',
      salary: '1200 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Daniel Wilson',
      submittedOn: '6/3/2024',
      duration: '4 Weeks (1/7/2023 - 31/7/2023)',
      salary: '2500 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Olivia Martinez',
      submittedOn: '7/3/2024',
      duration: '3 Weeks (1/8/2023 - 21/8/2023)',
      salary: '1900 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'David Anderson',
      submittedOn: '8/3/2024',
      duration: '2 Weeks (1/9/2023 - 14/9/2023)',
      salary: '1700 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Sophia Taylor',
      submittedOn: '9/3/2024',
      duration: '1 Week (15/9/2023 - 21/9/2023)',
      salary: '1300 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'James Brown',
      submittedOn: '10/3/2024',
      duration: '3 Weeks (1/10/2023 - 21/10/2023)',
      salary: '2200 AED',
      image: 'https://via.placeholder.com/80',
    },
    {
      name: 'Ava Lee',
      submittedOn: '11/3/2024',
      duration: '2 Weeks (1/11/2023 - 14/11/2023)',
      salary: '1600 AED',
      image: 'https://via.placeholder.com/80',
    },
  ];
}
