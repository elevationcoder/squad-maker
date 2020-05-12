document.addEventListener('DOMContentLoaded', function() {
    getLeaders();
})

function getLeaders() {
    fetch('http://localhost:3000/leaders')
    .then((resp) => resp.json())
    .then((data) => console.log(data))
        
}