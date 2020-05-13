
        let character = new Character(data);
        let cardContainer = document.querySelector('main');
        let div = document.createElement('div')
        div.id ="card";
        div.setAttribute('data-id', `${character.name}`);
// CARD CONTENT
        let p = document.createElement('p')
        p.innerText = `Name: ${character.name}
         Age: ${character.age} 
         Weight: ${character.weight} 
         Height: ${character.height} 
         Sex: ${character.sex} 
         Race: ${character.race} 
         Class: ${character.class}
         Leaders: ${character.leaders_ids}`
        div.appendChild(p)
        let br = document.createElement('br');
        div.appendChild(br)
        cardContainer.appendChild(div);
//
        // let ul = document.createElement('ul')
        // character.forEach(c => {
        //     let li = document.createElement('li');
        //     li.setAttribute('data-id', `${c.id}`);
        //     let dropButton = document.createElement('button');
        //     dropButton.setAttribute('for', "drop")
        //     dropButton.setAttribute("character-data-id", `${c.id}`)
        //     dropButton.innerText = "Drop"
        // })
    }));