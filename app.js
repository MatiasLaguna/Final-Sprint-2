const inputName = document.getElementById("inputName");
const inputCost = document.getElementById("inputCost");
const list = document.getElementById("list-p");
let ArrayPeople = [];


function validar() {
    ArrayPeople.push([inputName.value, inputCost.value]);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    let Close = document.createElement("button")
    Close.classList.add("btn-close")
    li.innerText = ArrayPeople.at(-1)[0] + ": " + ArrayPeople.at(-1)[1]
    list.append(li);

    Close.addEventListener('click', deteleItem(this.parentElement), false)
    li.append(Close);
    let acum = 0
    for (const people of ArrayPeople) {
        acum += people[1] - 0
        console.log(acum)
    }

    let total = acum / ArrayPeople.length
    let div = document.getElementById("total");
    div.innerText = "A pagar cada uno: " + total
}


function deteleItem() {
    console.log(this)
}