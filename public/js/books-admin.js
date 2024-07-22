let ascendingId = true;
let ascendingRating = true;
let editingBookId = null;

document.addEventListener('DOMContentLoaded', function() {
    fetch('/book-form')
        .then(response => response.json())
        .then(data => {
            populateTable(data.data.results);
        })
        .catch(error => console.error('Error fetching book data:', error));
});

document.getElementById('addBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const bookData = {
        name: formData.get('name'),
        author: formData.get('author'),
        description: formData.get('description'),
        rating: parseFloat(formData.get('rating')),
    };

    fetch('/book-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    })
    .then(response => {
        if (response.ok) {
            console.log('Book added successfully.');
            fetchBooks();
            event.target.reset();
        } else {
            console.error('Failed to add the book.');
        }
    })
    .catch(error => console.error('Error adding book:', error));
});

document.getElementById('updateBookForm').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!editingBookId) return;

    const formData = new FormData(event.target);
    const bookData = {
        name: formData.get('name'),
        author: formData.get('author'),
        description: formData.get('description'),
        rating: parseFloat(formData.get('rating')),
    };

    fetch(`/book-form/${editingBookId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookData),
    })
    .then(response => {
        if (response.ok) {
            console.log(`Book with ID ${editingBookId} updated successfully.`);
            fetchBooks();
            event.target.reset();
            editingBookId = null;
            document.getElementById('updateBookForm').style.display = 'none';
        } else {
            console.error('Failed to update the book.');
        }
    })
    .catch(error => console.error('Error updating book:', error));
});

function fetchBooks() {
    fetch('/book-form')
        .then(response => response.json())
        .then(data => {
            populateTable(data.data.results);
        })
        .catch(error => console.error('Error fetching book data:', error));
}

function populateTable(data) {
    const tableBody = document.getElementById('bookTableBody');
    tableBody.innerHTML = '';
    data.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.id}</td>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.description}</td>
            <td>${book.rating}</td>
            <td>
                <button class="edit-button" onclick="editRow(${book.id}, '${book.name}', '${book.author}', '${book.description}', ${book.rating})">Edit</button>
                <button class="delete-button" onclick="deleteRow(${book.id}, this)">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function sortTableById() {
    const table = document.getElementById('bookTableBody');
    const rows = Array.from(table.rows);
    rows.sort((a, b) => {
        const aValue = a.cells[0].textContent;
        const bValue = b.cells[0].textContent;
        return ascendingId ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    });
    table.innerHTML = '';
    rows.forEach(row => table.appendChild(row));
    ascendingId = !ascendingId;
    document.getElementById('sortButton').textContent = ascendingId ? 'Sort by ID Ascending' : 'Sort by ID Descending';
}

function sortTableByRating() {
    const table = document.getElementById('bookTableBody');
    const rows = Array.from(table.rows);
    rows.sort((a, b) => {
        const aValue = parseFloat(a.cells[4].textContent);
        const bValue = parseFloat(b.cells[4].textContent);
        return ascendingRating ? aValue - bValue : bValue - aValue;
    });
    table.innerHTML = '';
    rows.forEach(row => table.appendChild(row));
    ascendingRating = !ascendingRating;
    document.getElementById('sortRatingButton').textContent = ascendingRating ? 'Sort by Rating Ascending' : 'Sort by Rating Descending';
}

function deleteRow(bookId, button) {
    fetch(`/book-form/${bookId}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            console.log(`Book with ID ${bookId} deleted successfully.`);
            const row = button.closest('tr');
            row.remove();
        } else {
            console.error('Failed to delete the book.');
        }
    })
    .catch(error => console.error('Error deleting book:', error));
}

function editRow(id, name, author, description, rating) {
    document.getElementById('updateBookForm').style.display = 'block';
    document.getElementById('updateName').value = name;
    document.getElementById('updateAuthor').value = author;
    document.getElementById('updateDescription').value = description;
    document.getElementById('updateRating').value = rating;
    editingBookId = id;
}

document.getElementById('logoutButton').addEventListener('click', () => {
   
    window.location.href = '/login';
       
});