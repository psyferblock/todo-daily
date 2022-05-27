alert("yoooooo")

// to remove from an array an index 
 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let id = ()=>{

elementId=randFunc(arr);
    
for( var i = 0; i < arr.length; i++){ 

    if ( arr[i] === id) { 

        arr.splice(i, 1); 
    }

};
};

// random function
let randFunc= (min,max){
    Math.floor(Math.random(max-min)*max);
}

// function create id/div
let  createDiv=document.createElement("div");
createDiv.setAttribute("id",`${element}`);

// create unordered todo list 

const ultodo = document.createElement("ul");
        ultodo.id="myList";
        //ul.setAttribute("id","myList");//this one is the same as teh above
        const listElements=[];
        listElements.push(createDiv);
        function createLi(item){
            let li = docuent.createElement('li');
                li.className = "item";
                ul.appendChild(li);
                li.innerHtml=item;
        }
