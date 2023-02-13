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
        var li = document.createElement('li')
        var del = document.createElement('button')
        del.textContent = "delete";
        del.className = "delete";
        li.textContent = `username = ${username} , email = ${email} and phone = ${phone}`
        li.id = username
        li.append(del)
        console.log(li);
        document.querySelector('#details').append(li)
    }

    document.querySelector('#details').onclick = (e)=>{
        if(e.target.className === "delete"){
            var id = e.target.parentNode.id;
            localStorage.removeItem(id)
            document.getElementById(id).remove();            
        }
    }

});