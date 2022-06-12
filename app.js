const inputName = document.getElementById("inputName");
const inputCost = document.getElementById("inputCost");
const list = document.getElementById("list-p");
let ArrayPeople = [];

function validar() {
    ArrayPeople.push([inputName.value, inputCost.value]);
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = ArrayPeople.at(-1)[0] + ": $" + ArrayPeople.at(-1)[1];
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
    const str = this.parentElement.textContent;
    const name = str.slice(0, str.indexOf(":"));
    ArrayPeople = ArrayPeople.filter((elem) => elem[0] !== name);
    console.log(ArrayPeople);
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
    let div = document.getElementById("total");
    let divSubtotal = document.getElementById("subtotal");
    divSubtotal.innerText = "A pagar cada uno: $" + (subtotal ? subtotal : 0);
    div.innerText = "Total: $" + (acum ? acum : 0);
}