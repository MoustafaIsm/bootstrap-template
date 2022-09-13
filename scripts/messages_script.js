const table = document.getElementById("messages-table");

fetch("http://localhost/SEF/bootstrap-template-backend/get_messages.php")
    .then((response) => response.body)
    .then((data) => {
        console.log(data);
    });