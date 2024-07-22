let ascendingId = true;
let ascendingRating = true;

document.addEventListener('DOMContentLoaded', function() {
    fetch('/book-form')
        .then(response => response.json())
        .then(data => {
            populateTable(data.data.results);
        })
        .catch(error => console.error('Error fetching book data:', error));
});

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