const userForm = document.querySelector("#userForm");
const forum = document.querySelector("#forum");
console.log(userForm);
console.dir(userForm);



let func = function(event){
    event.preventDefault();
    const formData = new FormData(userForm);
    const userMessage = {
        userName: formData.get('userName'),
        userEmail: formData.get('userEmail'),
        userMessage: formData.get('userMessage'),
    }
    //console.log(userMessage);
    // formData.set('userName', ' ');
    // formData.set('userEmail', ' ');
    // formData.set('userMessage', ' ');
    userForm[0].value = '';
    userForm[1].value = '';
    userForm[2].value = '';

    forum.innerHTML += `
    <div>
    <span>${userMessage.userName}: </span>
    <span>${userMessage.userMessage}</span>
    </div>
    `
}

userForm.addEventListener('submit', func)










// function sumFunc(arg1, arg2, arg3) {
//     // let arg1, arg2, arg3
//     return arg1+arg2+arg3
// }

// let obj = {
//     a: 1
// }
// obj.b = 2

// let linkToFunc = sumFunc
// linkToFunc.someProperty = 'Hello'

// let result = sumFunc(1,2,3)
// // console.log(result)

// // console.log('Compare functions: ' + (linkToFunc == sumFunc))
// // console.log(sumFunc.someProperty)

// let resultMul = (function (arg1, arg2) {
//     return arg1 * arg2
// })(4,5)

// // console.log(resultMul)

// // const obj2 = 'Hello'

// const button = document.querySelector('#click')
// const userName = document.querySelector('input') // $(selector)
// const inputValue = document.querySelector('#input-value')

// const inputs = document.querySelectorAll('input') // $(selector)

// button.addEventListener('click', function (event) {
//     inputValue.innerText = userName.value
//     console.log(event)
// })

// const inputListener = function (event) {
//     const input = event.target
//     inputValue.innerText = input.value
// }

// for (const input of inputs) {
//     // console.log(input)
//     input.addEventListener('input', inputListener);
// }


// // userName.addEventListener('input', inputListener)
// // console.log('Step 1')
// // alert('Step 2') // Bad way
// // console.log('Step 3')