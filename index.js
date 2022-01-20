let myleads=[];
const inputEl=document.getElementById("input-el");
let ul=document.getElementById("ul-el")
const input=document.getElementById("input-btn");
let cross=document.getElementById("cross");
let check=document.getElementsByClassName("check");


const leadLocalStorage= JSON.parse( localStorage.getItem("myleads"))
if(leadLocalStorage){
    myleads=leadLocalStorage;
    render();
}

input.addEventListener('click',function(){
    if(inputEl.value != ""){
        const items={"item":inputEl.value , "status":0}
        myleads.push(items);
    }
    inputEl.value = ""
    render();
    localStorage.setItem("myleads",JSON.stringify(myleads));
})

cross.addEventListener("dblclick",function(){
    localStorage.clear();
    myleads = [];
    render();
})

function render() {
    let listitems = ""
    for(let i=0; i< myleads.length ; i++){

        var status ='';
        if(myleads[i].status == 1){
            status = 'class="done"';
        }
        //ul.innerHTML += "<li>" + myleads[i] +" "+ "</li>";
        // const li=document.createElement("li")
        // li.textContent=myleads[i]
        // ul.append(li)
        // listitems += "<li><a target='_blank' href='" + myleads[i]+"'>" + myleads[i] +" "+ "</a></li>";
        listitems += `<li data-itemIndex="${i}" ${status}>
                            <span class="item">${myleads[i].item}</span>
                            <div style="display: inline-block;"><span class="check"> &#x2705; </span></div>
                      </li>`;
    }

    ul.innerHTML = listitems

    var items=document.querySelectorAll('ul li');
    for (var i=0;i<items.length;i++){
        items[i].querySelector('.check').addEventListener('click',function(){
            console.log(check);
            var index = this.parentNode.parentNode.dataset.itemindex;
            console.log(index);
            itemComplete(index);
        })
    }
}

function itemComplete(index){
    myleads[index].status = 1;
    render();
}