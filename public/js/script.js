document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    })
    console.log("Data -", data);
    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success Response-", result);
    })
    .catch(err => {
        console.log("Error Response -", err);
    })
})