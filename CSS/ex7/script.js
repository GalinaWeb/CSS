const next = document.getElementById('next')
const prev = document.getElementById('prev')

const slider = document.querySelector('.slider')

createSlider (slider, 4)

/**
 * 
 * @param {Element} slider 
 * @param {number} sliderNum 
 */
function createSlider (slider, sliderNum) {
    const sliderLenght = slider.children.length
    let stepCounter = Math.floor(sliderNum / 2)

    initTails()
    initElemWidth()
    
    const step = initElemWidth()
    transform()

    next.addEventListener('click', () => {
        if(stepCounter < sliderLenght + 1) {
            stepCounter++;
            transform(true)
        }
        if (stepCounter == sliderLenght + 1) {
            setTimeout(() => {
                stepCounter = 1
                transform()
            }, 300)
        }
    })

    prev.addEventListener('click', () => {
        if(stepCounter > 0) {
            stepCounter--;
            transform(true)
        }
        if (stepCounter == 0) {
            setTimeout(() => {
                stepCounter = sliderLenght
                transform()
            }, 300)
        }
    })

    function initTails() {
        const tailStart = [...slider.children].slice(-stepCounter).map(el => el.outerHTML)
        console.log(tailStart)
        
        const tailEnd = [...slider.children].slice(0, stepCounter).map(el => el.outerHTML)
        console.log(tailEnd)
        slider.insertAdjacentHTML('afterbegin', tailStart.join(''))
        slider.insertAdjacentHTML('beforeend', tailEnd.join(''))
    }

    function initElemWidth() {
        const elem = slider.firstElementChild;
        const elemML = parseInt(getComputedStyle(elem).marginLeft);
        const elemMR = parseInt(getComputedStyle(elem).marginRight);
        const sliderWidth = parseInt(getComputedStyle(slider).width);
        const elemWidth = (sliderWidth - sliderNum * elemML - sliderNum * elemMR) / sliderNum;
        [...slider.children].forEach(el => el.style.width = elemWidth + 'px')
        console.log(elemML)

        return Math.ceil(elemWidth + elemMR + elemML)
        
    }

    function transform(transition = false) {
        if (transition) slider.style.transition = "transform .3s"
        else slider.removeAttribute('style')
        slider.style.transform = `translateX(-${step * stepCounter}px)`

    }
}