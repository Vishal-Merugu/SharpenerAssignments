
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

    const items = document.querySelectorAll("li")
    const third = items[2]
    third.style.backgroundColor = 'green' ;

    for(var i = 0 ; i < items.length ; i++){
        items[i].style.fontWeight = "bold";
    }

    fifth = items[4]
    fifth.classList.add("list-group-item");

    items[1].style.backgroundColor = "green";
    items[2].style.backgroundColor = "white";
    items[2].classList.add('display:none');

});


//traversing DOM
var itemlist  =  document.querySelector("#items");

//parentNode = parentElement
// console.log(itemlist.parentNode);
// itemlist.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemlist.parentNode.parentNode);

//childNodes
// console.log(itemlist.childNodes);
//children is better than childNodes bcoz childNodes give line breaks and text also

//children
// console.log(itemlist.children);
// itemlist.children[0].style.backgroundColor = "yellow";

// similarily firstelementChild is better then firstChild
//firstChild and firstElementChild
// console.log(itemlist.firstChild);
// console.log(itemlist.firstElementChild);

//again lastElementChild is better than lastChild
// lastChild and lastElementChild
// console.log(itemlist.lastChild);
// console.log(itemlist.lastElementChild);


// similarily nextElementSibling is better than nextSibling
//nextSibling and nextElementSibling
var title = document.querySelector('.title')
// console.log(title.nextSibling);
// console.log(title.nextElementSibling);

//similarily previousElementSibling is better than previousSibling
// previousSibling and PreviousElementSibling
// console.log(itemlist.previousSibling);
// console.log(itemlist.previousElementSibling);
// itemlist.previousElementSibling.innerHTML = 'Hello World';

//create element

var newdiv = document.createElement('div')
newdiv.textContent = "new div";
newdiv.className = "hello1";
newdiv.id = "hello1"
newdiv.setAttribute("title","newdiv");
newdivtext = document.createTextNode("hello world new div here");
newdiv.appendChild(newdivtext)
// or newdiv.append(newdivtext);
console.log(newdiv);

//insert this div
var container = document.querySelector('header .container');
var h1 = document.querySelector("header h1")
container.insertBefore(newdiv,h1);






