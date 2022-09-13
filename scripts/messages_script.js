// Variables
const table = document.getElementById("messages-table");

// API fetching
fetch("http://localhost/SEF/bootstrap-template-backend/get_messages.php")
    .then((response) => response.json())
    .then((data) => insertDataIntoTable(data.messages));

// Functions
function insertDataIntoTable(messages) {
    messages.forEach(m => {
        addTableRow(m);
    });
}

function addTableRow(message) {
    const row = document.createElement("tr");

    const name = document.createElement("td");
    name.classList.add("new-table-data");
    name.textContent = message.full_name;

    const email = document.createElement("td");
    email.classList.add("new-table-data");
    email.textContent = message.email;

    const phoneNumber = document.createElement("td");
    phoneNumber.classList.add("new-table-data");
    phoneNumber.textContent = message.phone_number;

    const userMessage = document.createElement("td");
    userMessage.classList.add("new-table-data");
    userMessage.textContent = message.message;

    row.appendChild(name);
    row.appendChild(email);
    row.appendChild(phoneNumber);
    row.appendChild(userMessage);

    table.appendChild(row);
}