if(window.SSR){
const header = document.createElement('h1')
const divRoot = document.querySelector('#root')
header.textContent = 'Home'
divRoot.append(header)
window.finishRender()
}

document.querySelector('button').addEventListener('click', () => {
    console.log('Click')
})