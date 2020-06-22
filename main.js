let buttonForm = document.querySelector(".button-form");

let tuman = document.querySelector(".tuman");

let form = document.getElementById("form");

buttonForm.addEventListener('click', (event)=>{
    tuman.style.display= "block";
    form.style.display= "block";
});

tuman.addEventListener('click', (event)=>{
    tuman.style.display= "none";
    form.style.display= "none";
});

form.addEventListener('click', (event)=>{
    if(event.target.matches(".form-button")){
        // tuman.style.display= "none";
        // form.style.display= "none";
    }
});