const inputName = document.getElementById("inputName");
const inputCost = document.getElementById("inputCost");
const list = document.getElementById("list-p");
const div = document.getElementById("total");
const divSubtotal = document.getElementById("subtotal");
let ArrayPeople = [];
let count = 0

function agregarItem() {
    count++
    ArrayPeople.push([inputName.value, inputCost.value, count]);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.setAttribute("id", count)
    li.textContent = ArrayPeople.at(-1)[0] + ": $" + ArrayPeople.at(-1)[1];
    li.append(closeButton());
    list.append(li);
    totalValue();
}

function closeButton() {
    let Close = document.createElement("button");
    Close.addEventListener("click", deteleItem, false);
    Close.classList.add("btn-close");
    return Close;
}

function deteleItem() {
    const id = this.parentElement.id;
    ArrayPeople = ArrayPeople.filter((elem) => elem[2] != id);
    this.parentElement.remove();
    totalValue();
}

function totalValue() {
    let acum = 0;
    for (const people of ArrayPeople) {
        acum += people[1] - 0;
        console.log(acum);
    }

    let subtotal = acum / ArrayPeople.length;
    divSubtotal.textContent = "A pagar cada uno: $" + (subtotal ? subtotal : 0);
    div.textContent = "Total: $" + (acum ? acum : 0);
}