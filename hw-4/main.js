



//task.1

var block = document.querySelector(".block");
block.addEventListener("mousemove", function(event) {
    var x = event.clientX - block.offsetLeft;
    var y = event.clientY - block.offsetTop;
    block.setAttribute("data-x", x);
    block.setAttribute("data-y", y);
});


var value = document.querySelector(".value");
var incrementButton = document.querySelector(".increment");
var decrementButton = document.querySelector(".decrement");

var count = 0;

incrementButton.addEventListener("click", function() {
    count++;
    value.textContent = count;
    value.classList.remove("red");
    value.classList.add("green");
});

decrementButton.addEventListener("click", function() {
    if (count > 0) {
        count--;
        value.textContent = count;
        value.classList.remove("green");
        value.classList.add("red");
    }
});


//var getColor = prompt('введите цвет сфетофора')

//  if(getColor = colors.red){
//     alert('STOP')
//  }else if(getColor = colors.yellow){
//     alert('GET READY')
// }else if(getColor = colors.green){
//     alert('GO')
// }else if (typeof + getColor !== 'object')
//     alert ('введите цвет светофора!')
// else{
//     alert('извините, такого ответа не существует')
// }

var trafficLight = document.querySelector(".traffic-light");
var redLight = document.querySelector(".red");
var greenLight = document.querySelector(".green");

var input = prompt("Введите цвет светофора (красный или зеленый)");

if (input === "красный") {
    redLight.classList.add("active");
    trafficLight.textContent = "STOP";
} else if (input === "зеленый") {
    greenLight.classList.add("active");
    trafficLight.textContent = "GO";
}


  





