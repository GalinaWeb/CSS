const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const express = require('express')
const app = express()
const {EventEmitter} = require('events');
const { RSA_NO_PADDING } = require("constants");
class SSREmitter extends EventEmitter {}

async function render(res) {
    const renderEmitter = new SSREmitter ()
    const dom = await JSDOM.fromFile("./test/index.html", {
        runScripts: "dangerously",
        resources: 'usable',
        beforeParse(window){
            window.SSR = true
            window.finishRender = () => {
            renderEmitter.emit('finish')
            }
        }
    }
    ).then(dom => {
        renderEmitter.once('finish', () => {
            res.send(dom.serialize());
        })
              
    });

    return dom.serialize()
}

app.get('/', (reg, res, next) => {
   const html = await render(res)
   res.send(html)
})


app.use(express.static('./test'))

app.listen(3000)




//const dom = new JSDOM(`<body>
//<p>Hello world</p>
//<script>document.body.appendChild(document.createElement("hr"));</script>
//</body>`, {runScripts: "dangerously"});
//console.log(dom.window.document.querySelector("p").textContent); 
//console.log(dom.serialize());

