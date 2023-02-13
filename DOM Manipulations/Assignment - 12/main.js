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
        var edit = document.createElement('button')

        del.textContent = "delete";
        del.className = "delete";

        edit.textContent = "Edit"
        edit.className = "edit"

        li.textContent = `username = ${username} , email = ${email} and phone = ${phone}`;
        li.id = username;
        li.append(del);
        li.append(edit)
        console.log(li);
        document.querySelector('#details').append(li);

        document.querySelector('#username').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#phone').value = '';
    }

    document.querySelector('#details').onclick = (e)=>{
        if(e.target.className === "delete" || e.target.className === 'edit'){


            var id = e.target.parentNode.id;
            var temp_details  = JSON.parse(localStorage.getItem(id))
            localStorage.removeItem(id)
            document.getElementById(id).remove();   
            console.log(temp_details);

            if(e.target.className === 'edit'){
                document.querySelector('#username').value = temp_details.username;
                document.querySelector('#email').value = temp_details.email;
                document.querySelector("#phone").value = temp_details.phone;
            }           
    
        }
    }
});