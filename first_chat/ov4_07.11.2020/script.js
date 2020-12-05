console.log("Hello!");
const button = document.getElementById('button')
const button2 = document.getElementById('button2')
const ul = document.getElementById('ul')
const ul2 = document.getElementById('ul2')
console.log(button);

let offset = 0;
let limit = 1;
let num = 100;

function delay(ms, response) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(response), ms)
    })
}


button.addEventListener('click', async function (event) {
    let response = await fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=${offset}&limit=${limit}`)
    if (response.ok) {
        let button = await response.json()
        await delay(1000);

        button.forEach(item => {
           
            const newElement = document.createElement("li");
            newElement.classList.add("list-group-item")
            newElement.innerHTML = `<i class="fab fa-angellist"></i> ${item.username}: ${item.message}`;
            ul.append(newElement);
            console.log(item);
            offset++;

        });

    }

})


button2.addEventListener('click', async function (event) {
    let response = await fetch(`http://user08.test1.seschool.ru:3000/api/chat/?offset=${num}&limit=${limit}`)
    if (response.ok) {
        let button2 = await response.json()
        await delay(1000);

        button2.forEach(item => {
           
            const newElement = document.createElement("li");
            newElement.classList.add("list-group-item")
            newElement.innerHTML = `<i class="fab fa-angellist"></i> ${item.username}: ${item.message}`;
            ul2.append(newElement);
            console.log(item);
            num--;

        });

    }

})
