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
        label.innerHTML = leader.name + " " + "(" + leader.sex + ")";
        checkbox.id = `leader-${leader.id}`;
        checkbox.type = "checkbox"
        checkbox.value = leader.id
        div.appendChild(checkbox);
        div.appendChild(label);
        let br = document.createElement('br');
        div.appendChild(br)
    }));

    document.querySelector('form').addEventListener('submit', createCharacter);

}

function createCharacter(e) {
    e.preventDefault();

    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const gender = document.getElementById('sex').value
    const race = document.getElementById('race').value
    const klass = document.getElementById('klass').value
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    const leader_ids = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
        leader_ids.push(checkboxes[i].value);
        }
    }

    const strongParams = {
        character: {
            name,
            age,
            weight,
            height,
            sex: gender,
            race,
            klass,
            leader_ids
        }
    }

    function addCharacter() {
        fetch(CHARACTERS_URL, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(strongParams)
        }).then(resp => resp.json())
        .then((data) => console.log(data))
        
    }
}