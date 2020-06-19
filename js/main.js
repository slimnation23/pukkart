const selectAll = document.querySelectorAll('.__select');
selectAll.forEach(currentSelect => {

    const currentSelect_title = currentSelect.querySelector('.__select__title');
    const currentSelect_labels = currentSelect.querySelectorAll('.__select__label');
    // Toggle menu
    currentSelect_title.addEventListener('click', () => {
        toggleSelect(currentSelect)
    });

    // Close when click to option
    for (let i = 0; i < currentSelect_labels.length; i++) {
        currentSelect_labels[i].addEventListener('click', (evt) => {
            currentSelect_title.textContent = evt.target.textContent;
            currentSelect.setAttribute('data-state', '');
        });
    }
})
const toggleSelect = (select, close=false) => {
    
    if ('active' === select.getAttribute('data-state') || close) {
        select.setAttribute('data-state', '');
    } else {
        select.setAttribute('data-state', 'active');
    }
}
window.addEventListener("click", windowOnClick);

function windowOnClick(event) {
    selectAll.forEach(currentSelect => {
        if (event.target.parentNode !== currentSelect) {
            toggleSelect(currentSelect,true);
        }
    })
};

// Artwork buttons
let btnPlus = document.getElementById('btn-plus');
let btnCancel = document.getElementById('btn-cancel');
let menuButtons = document.getElementById('card-body-buttons');
let menuMoreButtons = document.getElementById('card-body-moreButtons');
let btnPlus2 = document.getElementById('btn-plus2');
let btnPlus3 = document.getElementById('btn-plus3');
let btnPlus4 = document.getElementById('btn-plus4');
let btnPlus5 = document.getElementById('btn-plus5');
let btnPlus6 = document.getElementById('btn-plus6');
let btnPlus7 = document.getElementById('btn-plus7');
let btnPlus8 = document.getElementById('btn-plus8');
let btnCancel2 = document.getElementById('btn-cancel2');
let btnCancel3 = document.getElementById('btn-cancel3');
let btnCancel4 = document.getElementById('btn-cancel4');
let btnCancel5 = document.getElementById('btn-cancel5');
let btnCancel6 = document.getElementById('btn-cancel6');
let btnCancel7 = document.getElementById('btn-cancel7');
let btnCancel8 = document.getElementById('btn-cancel8');
let menuButtons2 = document.getElementById('card-body-buttons2');
let menuButtons3 = document.getElementById('card-body-buttons3');
let menuButtons4 = document.getElementById('card-body-buttons4');
let menuButtons5 = document.getElementById('card-body-buttons5');
let menuButtons6 = document.getElementById('card-body-buttons6');
let menuButtons7 = document.getElementById('card-body-buttons7');
let menuButtons8 = document.getElementById('card-body-buttons8');
let menuMoreButtons2 = document.getElementById('card-body-moreButtons2');
let menuMoreButtons3 = document.getElementById('card-body-moreButtons3');
let menuMoreButtons4 = document.getElementById('card-body-moreButtons4');
let menuMoreButtons5 = document.getElementById('card-body-moreButtons5');
let menuMoreButtons6 = document.getElementById('card-body-moreButtons6');
let menuMoreButtons7 = document.getElementById('card-body-moreButtons7');
let menuMoreButtons8 = document.getElementById('card-body-moreButtons8');

btnPlus.onclick = function() {
    menuButtons.style.display = "none";
    menuMoreButtons.style.display = "flex";
}

btnCancel.onclick = function() {
    menuMoreButtons.style.display = "none";
    menuButtons.style.display = "flex";
}

btnPlus2.onclick = function() {
    menuButtons2.style.display = "none";
    menuMoreButtons2.style.display = "flex";
}

btnCancel2.onclick = function() {
    menuMoreButtons2.style.display = "none";
    menuButtons2.style.display = "flex";
}

btnPlus3.onclick = function() {
    menuButtons3.style.display = "none";
    menuMoreButtons3.style.display = "flex";
}

btnCancel3.onclick = function() {
    menuMoreButtons3.style.display = "none";
    menuButtons3.style.display = "flex";
}

btnPlus4.onclick = function() {
    menuButtons4.style.display = "none";
    menuMoreButtons4.style.display = "flex";
}

btnCancel4.onclick = function() {
    menuMoreButtons4.style.display = "none";
    menuButtons4.style.display = "flex";
}

btnPlus5.onclick = function() {
    menuButtons5.style.display = "none";
    menuMoreButtons5.style.display = "flex";
}

btnCancel5.onclick = function() {
    menuMoreButtons5.style.display = "none";
    menuButtons5.style.display = "flex";
}

btnPlus6.onclick = function() {
    menuButtons6.style.display = "none";
    menuMoreButtons6.style.display = "flex";
}

btnCancel6.onclick = function() {
    menuMoreButtons6.style.display = "none";
    menuButtons6.style.display = "flex";
}

btnPlus7.onclick = function() {
    menuButtons7.style.display = "none";
    menuMoreButtons7.style.display = "flex";
}

btnCancel7.onclick = function() {
    menuMoreButtons7.style.display = "none";
    menuButtons7.style.display = "flex";
}

btnPlus8.onclick = function() {
    menuButtons8.style.display = "none";
    menuMoreButtons8.style.display = "flex";
}

btnCancel8.onclick = function() {
    menuMoreButtons8.style.display = "none";
    menuButtons8.style.display = "flex";
}