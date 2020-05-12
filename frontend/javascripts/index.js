const BASE_URL = "http://localhost:3000"
const LEADERS_URL = `${BASE_URL}/leaders`
const CHARACTERS_URL = `${BASE_URL}/characters`


document.addEventListener('DOMContentLoaded', function() {
    getLeaders();
})


function getLeaders() {
    fetch(LEADERS_URL)
    .then((resp) => resp.json())
    .then((data) => data.forEach(data => {
        let leader = new Leader(data);
        let div = document.getElementById('leader-checkbox');
        let checkbox = document.createElement('input');
        let label = document.createElement('label');
        label.setAttribute('for', `leader-${leader.id}`);
        label.innerHTML = leader.name
        checkbox.id = `leader-${leader.id}`;
        checkbox.type = "checkbox"
        checkbox.value = leader.id
        div.appendChild(checkbox);
        div.appendChild(label);
        
    }));
}