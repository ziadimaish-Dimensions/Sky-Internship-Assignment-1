import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  @Input() employee: any;
}
