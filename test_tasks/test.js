function delay(ms){
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve(), ms)
    })
}

// delay(1000).then (() => {
//     console.log ("wwwwwwwwwwwwww")
//     return delay(1000)
// })
// .then (() => {
//     console.log ("RRRRRRRR")
//     return delay(1000)
// })
// .then (() => {
//     console.log ("TTTTTTTTTTT")
// })


async function Test() {

    await delay(1000)  
    console.log ("ZZZZZZZZZZZZZZZZZZ")
    await delay(1000)  
    console.log ("XXXXXXXXXXXXXXXX")
    await delay(1000)  
    console.log ("CCCCCCCCCCCCCC")
}

Test()