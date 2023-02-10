
document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector('form').onsubmit = () => {
        const item = document.querySelector('input[type = "text"]');
        if (item.value.length > 0 ){
            const li = document.createElement('li');
            li.innerHTML = item.value ;
            li.classList.add("list-group-item");
            document.querySelector('#items').append(li);
            item.value = "";
        }
        return false;
    }

    const header = document.querySelector('#main-header');
    header.className = "bg-dark text-white p-4 mb-3"
    // document.querySelector('#main-header').className = "bg-dark text-white p-4 mb-3";

    const additems = document.querySelector(".title")
    additems.classList.add('font-weight-bold','text-success');
    
});