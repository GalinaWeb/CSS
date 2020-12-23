const root = document.getElementById('root')

const doc1 = document.createElement('h1')

doc1.textContent = 'Hello'

root.append(doc1)

if (window.SSR) finishRender()