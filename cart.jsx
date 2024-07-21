
let arr = JSON.parse(localStorage.getItem("Cart"));
let price = 0;


let arr1 = arr.map((item) => {
    price += item.price;
    return `<div>
    <div> <img src="${item.image}"> </div>
    <div>
        <h1>${item.title} </h1>
        <p>Price ${item.price} </p>
        <button id="${item._id}">Remove</button>
        </div>

    </div>`
})
document.querySelector("#cart_div").innerHTML = ""
let arr2 = arr1.join("");
document.querySelector("#cart_div").innerHTML = arr2;



function myfun() {
    localStorage.setItem("total price", JSON.stringify(price));
    window.location = "./checkout.html"
}
document.querySelector("#total_MRP").innerText = `$${price}`;
document.querySelector("#shipping").innerText = "$9.99"
document.querySelector("#total_paid").innerText = `$${price + 9.99}`
let butnarrs = document.querySelectorAll("#cart_div div button");
for (let butnarr of butnarrs) {
    butnarr.addEventListener("click", (event) => {
        let arr = JSON.parse(localStorage.getItem("Cart")) || [];
        let id = event.target.id;
        console.log(id);
        let arr3 = [];
        arr.map((item) => {
            if (item._id != id) {
                arr3.push(item);
            }
        })

        localStorage.setItem("Cart", "");
        localStorage.setItem("Cart", JSON.stringify(arr3));
        let arr1 = arr.map((item) => {
            price += item.price;
            return `<div>
    <div> <img src="${item.image}"> </div>
    <div>
        <h1>${item.title} </h1>
        <p>Price ${item.price} </p>
        <button id="${item._id}">Remove</button>
        </div>

    </div>`
        })
        document.querySelector("#cart_div").innerHTML = ""
        let arr2 = arr1.join("");
        document.querySelector("#cart_div").innerHTML = arr2;
        window.location = "./cart.html"

    })
}
