import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css'],
})
export class EmployeeCardComponent {
  //input property to receive the employee object
  @Input() employee: any;
  //input property to receive the search term
  @Input() searchTerm: string = '';

  // Function to highlight the matched term
  getHighlightedText(text: string, search: string) {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    //highlight the text by wrapping it in a mark tag
    return text.replace(regex, '<mark>$1</mark>');
  }
}
