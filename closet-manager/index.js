const foodDiv = document.querySelector(".food");
const url = "http://127.0.0.1:1337";
const POST_ITEMS = "/food-items";
const GET_ITEMS = "/food-items?_sort=expirationdate:ASC";
let allFood = [];
let dataSend = {};

const addFoodForm = document.forms.addFood;
const foodTitle = addFoodForm.foodTitle;
const expirationDate = addFoodForm.expirationdate;

addFoodForm.addEventListener("submit", addFood);
let lastAddedItem = null;


init();

function init () {
    getFood();
}

function getFood() {
    fetch(url + GET_ITEMS)
    .then((data) => data.json())
    .then((result) => {
        allFood = result;
        renderFood(allFood);
        if(lastAddedItem !== null) {
            flashLastAddedItem(lastAddedItem);
        }
    }).
    catch((error) => {
        console.log(error);
    });

    function renderFood(food) {
        let list = [];
        food.forEach(f => {
            const item = `<li id=${f.id}>${f.title}</li>`;
            list = [...list, item];
        });
        console.log(list);
        foodDiv.innerHTML = `<ul>${list.join("")}</ul>`;
    }
}

function addFood(event) {
    event.preventDefault();
    const title = foodTitle.value.trim();
    const date = expirationDate.value;
    console.log(title, date);

    dataSend = {
        title: title,
        expirationdate: date,
        category: 'default'
    }
    postFood();
}

function postFood() {
    fetch(url + POST_ITEMS, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataSend)
    })
    .then(resp => resp.json())
    .then((data) => {
        console.log(data);
        foodTitle.value = "";
        expirationDate.value = "";

        lastAddedItem = data;

        //maj
        getFood();
    });
}

function flashLastAddedItem(item) {
    console.log(item);
    const lastAddedItemElement = document.getElementById(`${item.id}`);

    lastAddedItemElement.classList.add("just-added");

    setTimeout(() => {
        lastAddedItemElement.classList.remove("just-added");
    }, 2000);
}