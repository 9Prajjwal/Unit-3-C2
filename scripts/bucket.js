// On clicking remove button the item should be removed from DOM as well as localstorage.

appendData();



function appendData() {

    let obj={};
     
   
let data=JSON.parse(localStorage.getItem("coffee")) || [];

let container = document.getElementById("bucket");
container.innerHTML=null;

data.forEach((el,ind) => {

        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let p = document.createElement("h3");
        p.innerText = el.title;

        let p1 = document.createElement("h3");
        p1.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "remove";
        btn.setAttribute("id","remove_coffee");
        btn.addEventListener("click", function() {
            remove(ind);
        })
        
        div.append(image,p,p1,btn);

        container.append(div);

        if(obj.totalprice===undefined) {
            obj.totalprice=el.price;

        } else {
            a = obj.totalprice;
            obj.totalprice = a + el.price;
        }

});

totalprice(obj);
console.log(obj);
}

function remove(ind) {

    let data = JSON.parse(localStorage.getItem("coffee")) || [];

    let data1 = data.filter(function(el,i) {
        return i!==ind;
    })

    localStorage.setItem("coffee",JSON.stringify(data1));
    appendData();

}

function totalprice(obj) {

    let div = document.getElementById("total-div");
    div.innerHTML=null;
    let a = document.createElement("h3");
    a.setAttribute("id","total_amount")
    a.innerText = obj.totalprice;

    div.append(a);
}