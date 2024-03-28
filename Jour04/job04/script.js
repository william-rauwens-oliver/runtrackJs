document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#user tbody');
    const ButtonUpdate = document.querySelector('#ButtonUpdate');

    function TableUpdate() {
        fetch('utilisateur.json')
        .then(response => response.json())
        .then(data => {
            tableBody.innerHTML = '';
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }

    TableUpdate();

    ButtonUpdate.addEventListener('click', TableUpdate);
});