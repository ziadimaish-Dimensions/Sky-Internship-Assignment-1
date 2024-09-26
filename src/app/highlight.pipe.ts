import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight',
  standalone: true,
})
export class HighlightPipe implements PipeTransform {
  transform(employees: any[], searchTerm: string): any[] {
    if (!searchTerm) return employees;

    const lowerSearch = searchTerm.toLowerCase();
    return employees.filter((employee) =>
      employee.name.toLowerCase().includes(lowerSearch)
    );
  }
}
