
document.addEventListener('DOMContentLoaded', () =>{
    const form = document.querySelector('#addForm');
    const items = document.querySelector("#items")
    const filter = document.querySelector("#filter")

    //imma comment this below function bcoz it works with only item name if we want to add description then we should extend this code so im writing another code below for that..

    // form.onsubmit = (e) =>{

    //     if (document.querySelector('#item').value.length > 0){
    //         const li = document.createElement('li');
    //         li.innerHTML = document.querySelector("#item").value + '<button class="btn btn-danger btn-sm float-right delete">X</button>'
    //         li.className = "list-group-item"
    //         items.append(li)
    //         console.log(li);

            
    //     };
    //     console.log(e);
    //     return false;
    // }



    //delete button can also be added using create element then creating another nd inserting it inside the element(appendChild) and adding class element a bigger and sophisticated way.

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


    //this below code will filter only if item is present if we want to filter with both item and description find another code in below...

    // filter.addEventListener('keyup', (e) =>{
    //     var text = e.target.value.toLowerCase();
    //     //get lis
    //     var allitem = items.querySelectorAll("li");
    //     //convert this collection into array if we console.log() we find the above will give html collection which is tough to operate on;
    //     Array.from(allitem).forEach((item)=>{
    //         var itemname = item.firstChild.textContent;
    //         if(itemname.toLowerCase().indexOf(text) != -1){
    //             item.style.display = 'block';
    //         }
    //         else {
    //             item.style.display = 'none';
    //         }

    //     });
    // });



    //the below code is to additem and  description for every item...

    form.onsubmit = (e) => {
        var newitem = document.querySelector('#item');
        //either this or return false at end can be used
        e.preventDefault();
        if(newitem.value.length > 0){
            const li = document.createElement('li');
            li.className = "list-group-item";
            li.appendChild(document.createTextNode(newitem.value));
            items.appendChild(li)
            const lastitem  = document.querySelector('ul > li:last-of-type');
            const desc = document.querySelector("#desc");
            if (desc.value.length > 0){
                 
                lastitem.appendChild(document.createTextNode(`  :  ${desc.value}`));
            }

            newitem.value = "";
            desc.value = "";
            

            //add delete button  and edit buttonn

            var dbtn = document.createElement('button');
            var ebtn = document.createElement('button');

            dbtn.className = "btn btn-danger btn-sm float-right delete"
            ebtn.className = "btn btn-secondary  btn-sm float-right edit"
            
            dbtn.appendChild(document.createTextNode('X'));
            ebtn.appendChild(document.createTextNode('Edit'));
            lastitem.appendChild(dbtn);
            lastitem.appendChild(ebtn);
 
        }

    }

    //the below code is to filter between both description and item

    filter.onkeyup = (e) =>{
        var text = filter.value.toLowerCase();
        var allitem = document.querySelectorAll('#items > li')
        
        //convert above HTML collection into array 
        Array.from(allitem).forEach((item) =>{
            var itemname = item.firstChild.textContent ;
            var descname = ' ' ;
            if (item.childNodes.length == 4 ){
                var descname = item.childNodes[1].textContent.toLowerCase()
            }
            
            if(itemname.indexOf(text) != -1 || descname.indexOf(text) != -1 ){
                item.style.display = "block"
            }
            else {
                item.style.display = "none"
            }

        });

    }

    
});






