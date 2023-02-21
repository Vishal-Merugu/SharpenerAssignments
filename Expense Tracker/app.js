document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('form').onsubmit = (e) =>{
        e.preventDefault();
        const amount = document.querySelector("#amount").value;
        const description = document.querySelector("#description").value;
        const cat = document.querySelector('#cat').value;
        var obj = {
            cat : cat,
            amount : amount,
            description : description

        }
        objstr = JSON.stringify(obj);
        localStorage.setItem(description,objstr)

        const li = document.createElement('li')
        li.id = description;
        li.innerHTML = `Amount : ${amount}, Category : ${cat}, Description : ${description}`;

        xbtn = document.createElement('button');
        xbtn.classList.add('btn','btn-sm','btn-danger','me-2');
        xbtn.type = 'button';
        xbtn.id = 'xbtn'
        xbtn.textContent = 'X';

        editbtn = document.createElement('button');
        editbtn.classList.add('btn','btn-sm','btn-primary');
        editbtn.type = 'button';
        editbtn.id = 'editbtn'
        editbtn.textContent = 'Edit';

        const div = document.createElement('div')
        div.appendChild(editbtn)
        div.appendChild(xbtn)
        div.classList.add('btn-group','float-end');

        li.appendChild(div)

        document.querySelector('#list').append(li);

        document.querySelector("#amount").value = "";
        document.querySelector("#description").value = "";
        document.querySelector('#cat').value = "";


    }


    document.querySelector('#list').onclick = (e) => {
       if(e.target.id === "xbtn"){
            let toremove = e.target.parentElement.parentElement.id;
            document.querySelector(`#${toremove}`).remove();
            localStorage.removeItem(toremove);
       }

       if(e.target.id === 'editbtn'){
        let toedit = e.target.parentElement.parentElement.id;
        let contentobj = JSON.parse(localStorage.getItem(toedit));
        console.log(contentobj.amount);
        document.querySelector('#amount').value = contentobj.amount;
        document.querySelector("#description").value = contentobj.description;
        document.querySelector("#cat").value = contentobj.cat;

        localStorage.removeItem(`${toedit}`);
        document.querySelector(`#${toedit}`).remove();
       }
    }





});