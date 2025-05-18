const myLibrary = [];
const libraryContainer = document.getElementById('library-container');
const newBookBtn = document.getElementById('new-book-btn');
const bookFormDialog = document.getElementById('book-form-dialog');
const bookForm = document.getElementById('book-form');
const cancelBtn = document.getElementById('cancel-btn');

// Book constructor
function Book(title, author, pages, isRead) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Toggle read status prototype method
Book.prototype.toggleReadStatus = function() {
    this.isRead = !this.isRead;
};

// Add book to library
function addBookToLibrary(title, author, pages, isRead) {
    const newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    renderLibrary();
}

// Render the library
function renderLibrary() {
    libraryContainer.innerHTML = '';
    
    myLibrary.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.dataset.id = book.id;
        
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: <span class="read-status ${book.isRead ? 'read' : 'unread'}">
                ${book.isRead ? 'Read' : 'Unread'}
            </span></p>
            <div class="book-actions">
                <button class="toggle-read-btn">Toggle Read</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;
        
        libraryContainer.appendChild(bookCard);
    });
    
    // Add event listeners to all delete buttons
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const bookId = e.target.closest('.book-card').dataset.id;
            deleteBook(bookId);
        });
    });
    
    // Add event listeners to all toggle read buttons
    document.querySelectorAll('.toggle-read-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const bookId = e.target.closest('.book-card').dataset.id;
            toggleReadStatus(bookId);
        });
    });
}

// Delete a book
function deleteBook(bookId) {
    const bookIndex = myLibrary.findIndex(book => book.id === bookId);
    if (bookIndex !== -1) {
        myLibrary.splice(bookIndex, 1);
        renderLibrary();
    }
}

// Toggle read status
function toggleReadStatus(bookId) {
    const book = myLibrary.find(book => book.id === bookId);
    if (book) {
        book.toggleReadStatus();
        renderLibrary();
    }
}

// Form submission handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const isRead = document.getElementById('read-status').checked;
    
    addBookToLibrary(title, author, pages, isRead);
    bookForm.reset();
    bookFormDialog.close();
}

// Event listeners
newBookBtn.addEventListener('click', () => {
    bookFormDialog.showModal();
});

cancelBtn.addEventListener('click', () => {
    bookForm.reset();
    bookFormDialog.close();
});

bookForm.addEventListener('submit', handleFormSubmit);

// Add some sample books
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, false);
addBookToLibrary('1984', 'George Orwell', 328, true);