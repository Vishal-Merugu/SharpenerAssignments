
document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('#addForm');
    const items = document.querySelector("#items")

    form.onsubmit = (e) =>{
        if (document.querySelector('#item').value.length > 0){
            const li = document.createElement('li');
            li.innerHTML = document.querySelector("#item").value + '<button class="btn btn-danger btn-sm float-right delete">X</button>'
            li.className = "list-group-item"
            items.append(li)
            console.log(li);
        };
        console.log(e);
        return false;
    }

    items.addEventListener('click',(e)=>{
        if(e.target.classList.contains('delete')){
            if(confirm("Are You Sure Asbout That ????")){
                e.target.parentNode.remove()
                //can also be done as: 
                // var elementtoremove = e.target.parentElement ;
                // items.removeChild(elementtoremove);
            }

        }
    });

});






