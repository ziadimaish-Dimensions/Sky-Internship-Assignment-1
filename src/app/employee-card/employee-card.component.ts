import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Input() searchTerm: string = '';

  // Function to highlight the matched term
  getHighlightedText(text: string, search: string) {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}
