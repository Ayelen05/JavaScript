let parrafo = document.getElementById("parrafo");
let arrayParrafo = parrafo.innerHTML.split(" ");

for (let i = 0; i < arrayParrafo.length; i++) {
    if (arrayParrafo[i].length >= 8) {
       arrayParrafo[i] = `<span class="palabraL">${arrayParrafo[i]}</span>`;
    }
}
parrafo.innerHTML = arrayParrafo.join(" ");