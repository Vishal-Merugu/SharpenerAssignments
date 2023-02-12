document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        var email = document.querySelector('#email').value;
        localStorage.setItem('email',email);
        console.log(`This is the mail stored in local storage : ${localStorage.getItem('email')}`);
        }
});