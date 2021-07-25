const food = document.querySelector(".food");
const url = "http://127.0.0.1:1337";
const GET_ITEMS = "/food-items"
let allFood = [];
init();

function init () {
    getFood();
}

function getFood() {
    fetch(url + GET_ITEMS)
    .then((data) => data.json())
    .then((result) => {
        allFood = result;
        console.log("allFood", allFood);
    }).
    catch((error) => {
        console.log(error);
    });
}