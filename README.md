# SkyInternshipAssignment1

This Angular project implements a **Profiles Page** that displays employee information in a card format. The page includes a **search bar** for filtering employees by name and dynamically highlights matching employee names. Employee cards also include **Approve** and **Decline** buttons for future functionality.

## Features

- **Search Bar**: Allows users to search for employees by name.
- **Employee Cards**: Each employee is displayed with their name, image, salary, and other relevant details.
- **Highlighting**: Names of employees matching the search term are highlighted in yellow, and the entire card gets a red border.
- **Approve/Decline Buttons**: Placeholder buttons.

## Usage

1. **Search Bar**: Type in the search bar to filter the employee list by name. The employees whose names match the search term will be displayed, and the matching part of the name will be highlighted in yellow.

2. **Employee Card**: Each card shows:
   - **Name**
   - **Submitted Date**
   - **Duration**
   - **Salary**
   - **Profile Image**
   - **Approve/Decline Buttons**: Not functional.

## Piping

In this project, I used a **custom pipe** to filter the employee list based on the search term.

- **Pipe Name**: `HighlightPipe`
- **Where It's Used**: The pipe is applied in the `app.component.html` file to filter the employees as the user types in the search bar.
- **How It Works**: The pipe checks whether the employee's name includes the search term and returns only those employees that match.
