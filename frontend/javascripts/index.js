const BASE_URL = "http://localhost:3000";
const LEADERS_URL = `${BASE_URL}/leaders`;
const CHARACTERS_URL = `${BASE_URL}/characters`;

//ONLOAD
document.addEventListener("DOMContentLoaded", function () {
  getLeaders();
  getCharacters();
});
// SHOW CHARACTERS
function getCharacters() {
  fetch(CHARACTERS_URL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((chars) => {
        showCard(chars);
      })
    );
}

function showCard(obj) {
  let character = new Character(obj);
  let cardContainer = document.querySelector("main");
  let div = document.createElement("div");
  div.id = "card";
  div.setAttribute("data-id", `${obj.id}`);
  // CARD CONTENT
  let p = document.createElement("p");
  p.innerText = `Name: ${character.name}
         Age: ${character.age} 
         Weight: ${character.weight} 
         Height: ${character.height} 
         Sex: ${character.sex} 
         Race: ${character.race} 
         Class: ${character.class}
         Leaders: ${character.leaders
           .map((leader) => {
             return leader.name;
           })
           .join(", ")};
         Review: ${character.review}`;
  div.appendChild(p);
  let br = document.createElement("br");
  div.appendChild(br);
  cardContainer.appendChild(div);

  let dropButton = document.createElement("button");
  dropButton.setAttribute("for", "drop");
  dropButton.setAttribute("character-data-id", `${obj.id}`);
  dropButton.innerText = "Drop";
  p.prepend(dropButton);

  let reviewField = document.getElementById("card");
  let field = document.createElement("input");
  field.setAttribute("for", "review");
  field.setAttribute("data-id", `${obj.id}`);
  field.placeholder = "Enter Review Here";
  let reviewButton = document.createElement("button");
  reviewButton.setAttribute("for", "review-button");
  reviewButton.innerText = "Submit Review";
  p.appendChild(field);
  p.appendChild(reviewButton);
  div.appendChild(br);
  reviewButton.addEventListener("click", (e) => updateCharReview(e, obj.id));
  dropButton.addEventListener("click", (e) => deleteCharacter(e, obj.id));
}
function deleteCharacter(e, id) {
  e.preventDefault();

  console.log(id);
  fetch(`${CHARACTERS_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .then((data) => validateCharDestroy(data, e));
  // debugger
}

function updateCharReview(e, id) {
  //   debugger;
  const strongParams = {
    character: {
      //   name,
      //   age,
      //   weight,
      //   height,
      //   sex,
      //   race,
      //   klass,
      review: event.target.parentNode.children[9].value,
      //   leader_ids,
    },
  };
  fetch(`${CHARACTERS_URL}/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(strongParams),
  })
    .then((resp) => resp.json())
    // .then((data) => {
    //   console.log(data);
    //   let char = document.querySelectorAll(`*[data-id='${data.id}']`)[0]
    //     .children[0];
    //   char.innerText = `Name: ${data.name}
    //     Age: ${data.age}
    //     Weight: ${data.weight}
    //     Height: ${data.height}
    //     Sex: ${data.sex}
    //     Race: ${data.race}
    //     Class: ${data.klass}
    //     Leaders: ${data.leaders
    //       .map((leader) => {
    //         return leader.name;
    //       })
    //       .join(", ")};
    //     Review: ${data.review}`;
    //   debugger;
    // find div with the right id
    // go to divs children to get <p>
    // go to <p> children to get review text
    // change revew.innerTEXT = responseData.review
    // });
    .then((data) => {
      let char = document.querySelectorAll(`*[data-id='${data.id}']`)[0];
      char.remove();
      showCard(data);
    });
}

function validateCharDestroy(data, e) {
  if (data.error) {
    alert("Deletion failed!");
  } else {
    e.target.parentNode.parentNode.remove();
  }
}

// GET LEADER SELECTION CHECKBOXES
function getLeaders() {
  fetch(LEADERS_URL)
    .then((resp) => resp.json())
    .then((data) =>
      data.forEach((data) => {
        let leader = new Leader(data);
        let div = document.getElementById("leader-checkbox");
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", `leader-${leader.id}`);
        label.innerHTML = leader.name + " " + "(" + leader.sex + ")";
        checkbox.id = `leader-${leader.id}`;
        checkbox.type = "checkbox";
        checkbox.value = leader.id;
        div.appendChild(checkbox);
        div.appendChild(label);
        let br = document.createElement("br");
        div.appendChild(br);
      })
    );

  document.querySelector("form").addEventListener("submit", createCharacter);
}
// NEW CHARACTER SUBMISSION
function createCharacter(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const gender = document.getElementById("sex").value;
  const race = document.getElementById("race").value;
  const klass = document.getElementById("klass").value;
  const review = document.getElementById("review").value;
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  // UPDATES DB WITH LEADER_IDS
  const leader_ids = [];
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
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
      review,
      leader_ids,
    },
  };
  //AJAX POST TO DB
  function addCharacter() {
    fetch(CHARACTERS_URL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(strongParams),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        showCard(data);
      });
  }

  addCharacter();
}
