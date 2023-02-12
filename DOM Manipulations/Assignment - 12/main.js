document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();

        var username = document.querySelector('#username').value;
        var email = document.querySelector('#email').value;
        var phone = document.querySelector('#phone').value;

        var details = {
            username : username,
            email : email,
            phone : phone
        }
        localStorage.setItem(username,JSON.stringify(details));

        console.log('This is the parsed output of the strgified input object of user details',JSON.parse(localStorage.getItem(username)));
    }
});