import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngFor and other directives
import { EmployeeCardComponent } from './employee-card/employee-card.component'; // Import EmployeeCardComponent
import { HighlightPipe } from './highlight.pipe'; // Import custom pipe

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule, EmployeeCardComponent, HighlightPipe], // Import CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string = '';
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
  ];
}
