// Add the coffee to local storage with key "coffee"

let bucketData=JSON.parse(localStorage.getItem("coffee")) || [];

getData();
bucketCount(bucketData);

async function getData() {
    let url = "https://masai-mock-api.herokuapp.com/coffee/menu";

    let res = await fetch(url);

    let data1 = await res.json();

    let Data = data1.menu.data;
    console.log(Data);
    append(Data);
}

function append(Data) {

    let container = document.getElementById("menu");

    Data.forEach((el) => {
        
        let div = document.createElement("div");

        let image = document.createElement("img");
        image.src = el.image;

        let p = document.createElement("h3");
        p.innerText = el.title;

        let p1 = document.createElement("h3");
        p1.innerText = el.price;

        let btn = document.createElement("button");
        btn.innerText = "Add to Bucket";
        btn.setAttribute("id","add_to_bucket");
        btn.addEventListener("click", function() {
            addtoBucket(el);
        })
        
        div.append(image,p,p1,btn);

        container.append(div);
    });
}

function addtoBucket(el) {
    bucketData.push(el);
    localStorage.setItem("coffee",JSON.stringify(bucketData))
    bucketCount(bucketData);
}


function bucketCount(bucketCount) {

    let container = document.getElementById("coffee_count");
    container.innerHTML=null;
   
    let obj = {
        a : bucketCount.length,
    }

    let a = document.createElement("p");
    a.innerText = obj.a;
    
    
    container.append(a);
}