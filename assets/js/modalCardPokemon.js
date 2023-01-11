const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};


fade.addEventListener("click", () => toggleModal());

function cardInfoPokemonModal(infoPoke){
    const headerModal = document.querySelector(".modal-header");
    headerModal.innerText = `${infoPoke.name}`
    headerModal.innerHTML += `<span class="infoType">${infoPoke.type}</span>`

    const bodyModal = document.querySelector(".modal-body");
    bodyModal.className = `modal-body ${infoPoke.type}`
    bodyModal.innerHTML = `
        <div class= "cardInfoPokemon"> 
            <img class="cardInfoPhoto" src="${infoPoke.photo}" alt="${infoPoke.name}">
            <div>
                <h4 class="titleInfo">Information</h4>
                <ul class="cardModalPokemon">
                    ${infoPoke.stats.map((stat) => `
                        <li class= "infoStatsPokemon" >
                            <p>${stat.name}</p>
                            <span>${stat.base}</span>
                        </li>`).join("")}
                </ul>
           </div>
        </div>
    
    `
}