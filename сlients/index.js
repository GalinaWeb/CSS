console.log("Hello!");
const allDogs = document.getElementById('all')
const inputDogId = document.getElementById('dog-id-get-input')
const buttonDogId = document.getElementById('dog-id-get-button')
const infoDogId = document.getElementById('dog-info')
const dogForm = document.querySelector("#dogForm")
const infoDogPost = document.getElementById('dog-info-post')
const dogFormPatch = document.querySelector("#dogFormPatch")

fetch('http://localhost:3000/api/dog').then((response) => {
    if (response.ok) {
        return response.json()
    }
}).then((dogs) => {
    let resultHtml = ''
    dogs.forEach((dog) => {
        resultHtml += `<div> ${dog.id} ${dog.name} ${dog.breed} ${dog.age}</div>`
    });
    allDogs.innerHTML = resultHtml
    console.log(resultHtml);
})

buttonDogId.addEventListener('click', async function (event) {
    const id = inputDogId.value
    let response = await fetch(`http://localhost:3000/api/dog/${id}`)
    if (response.ok) {
        let dog = await response.json()
        console.log(dog)
        let resultHtml = `<div> ${dog.id} ${dog.name} ${dog.breed} ${dog.age}</div>`
        infoDogId.innerHTML = resultHtml
        console.log(resultHtml);
    }
})

dogForm.addEventListener('submit', async function (event){
    event.preventDefault();
    const dogFormServ = await fetch('http://localhost:3000/api/dog', {    
        method: 'POST',        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: dogForm[0].value,
            breed: dogForm[1].value,
            age: dogForm[2].value
        })
    })
    const dogFromDb = await dogFormServ.json()
    let resultHtml = `<div> ${dogFromDb.id} ${dogFromDb.name} ${dogFromDb.breed} ${dogFromDb.age}</div>`
    infoDogPost.innerHTML = resultHtml
    console.log(resultHtml);
    //location.reload()
})

dogFormPatch.addEventListener('submit', async function (event){
    event.preventDefault();
    const id = dogFormPatch[0].value
    const dogToDb = await fetch(`http://localhost:3000/api/dog/${id}`, {    
        method: 'PATCH',        
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: dogFormPatch[1].value,
            breed: dogFormPatch[2].value,
            age: dogFormPatch[3].value
        })
    })
   
    location.reload()
})