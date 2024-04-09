window.addEventListener('DOMContentLoaded', () => {
    getVisitCount();
});

const functionApi = ''; // Add your function API URL here

const getVisitCount = () => {
    fetch(functionApi)
        .then(response => response.json())
        .then(data => {
            console.log("Website called function API.");
            const count = data.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log(error);
        });
}