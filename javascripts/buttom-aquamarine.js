let titulosButtons = document.querySelectorAll(".button-menu");

function selectLink () {
    titulosButtons.forEach((item) =>
    item.classList.remove('button-aquamarine'))
    this.classList.add('button-aquamarine');
}

titulosButtons.forEach((item) => 
    item.addEventListener ('click', selectLink)
);
