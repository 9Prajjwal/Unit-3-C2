

function debouncing() {

start(status(0),0);
start(status(3000),3000);
start(status(8000),8000);
start(status(10000),10000);
start(status(12000),12000);

}

function start(delay) {
  
        setTimeout(function() {
            status(delay);
        },delay)

         document.getElementById("form").reset();
}

function status(times) {
    if(times===0) {
        alert("Your oreder is accepted");
    } else if(times===3000) {
        alert("Your order is being Prepared");
    } else if(times===8000) {
        alert("Your order is being packed");
    } else if(times===10000) {
        alert("Your order is out for delivery");
    } else if(times===12000) {
        alert("Order delivered");
    }
}


