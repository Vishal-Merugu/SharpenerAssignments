document.addEventListener("DOMContentLoaded",()=>{

    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        var email = document.querySelector('#email').value;
        if (localStorage.getItem('allmails') === null){
            var allmails = [];
            console.log('in this');
        }
        else {
            allmails = JSON.parse(localStorage.getItem('allmails'));
        }

        allmails.push(email)
        localStorage.setItem('allmails',JSON.stringify(allmails))
        
        //to make input fields empty after login ... 
        document.querySelector('#email').value = "";
        document.querySelector("#password").value = "";


        //to console.log() all the saved emails so hence we scaled it.
        console.log(JSON.parse(localStorage.getItem('allmails')));
        }

});