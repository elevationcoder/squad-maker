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
        let leader = new Leader(data)
        let div = document.getElementById('leader-checkbox')
        let checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        debugger;
    }));
}