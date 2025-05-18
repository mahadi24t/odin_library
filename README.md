# Library Management System - README

## Overview

A web-based application for managing your personal book library. This application allows you to add, view, update, and delete books from your collection with a clean, responsive interface.

## Features

- **Book Management**
  - Add new books with title, author, page count, and read status
  - Remove books from your library
  - Toggle read/unread status
  - Unique ID generation for each book

- **User Interface**
  - Responsive design that works on desktop and mobile
  - Modal dialog for adding new books
  - Visual indicators for read/unread status
  - Card-based book display

- **Technical Implementation**
  - Vanilla JavaScript (no frameworks)
  - Modern CSS with responsive grid layout
  - Semantic HTML5
  - Dialog element for modals
  - Crypto API for unique IDs

## Installation

No installation required - this is a client-side web application. Simply open the `index.html` file in any modern web browser.

## Usage

1. **Adding a Book**
   - Click the "+ New Book" button
   - Fill in the book details in the form
   - Click "Add Book" to add it to your library

2. **Managing Books**
   - Click "Toggle Read" to change a book's read status
   - Click "Delete" to remove a book from your library

## File Structure

```
library-app/
├── index.html        # Main HTML file
├── styles.css        # Stylesheet
├── script.js         # JavaScript functionality
└── README.md         # This documentation file
```

## Technical Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- No server or database required (all data stored in memory)

## Browser Support

The application uses modern web APIs including:
- `crypto.randomUUID()`
- `<dialog>` element
- CSS Grid

Supported in:
- Chrome 37+
- Firefox 98+
- Safari 15.4+
- Edge 79+

## Customization

To customize the application:

1. **Styling**: Modify `styles.css` to change colors, layouts, etc.
2. **Book Fields**: Add additional fields to the Book constructor and form
3. **Sorting/Filtering**: Extend the JavaScript to add sorting capabilities

## Known Limitations

- Data is not persisted between sessions (will be lost on page refresh)
- No search functionality (can be added as an enhancement)
- No multi-user support (single-user application)

## Future Enhancements

Planned future improvements:
- Local storage persistence
- Book editing functionality
- Search and filtering options
- Book categories/tags
- Dark mode support

## License

This project is open source and available under the MIT License.