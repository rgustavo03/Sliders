
const dragger = document.querySelector(`.dragger`)
const link = document.getElementsByClassName(`item`)

let isDown = false;
let startX; // the moment of click
let scrollLeft;

dragger.addEventListener("mousedown", (e) => {
    isDown = true
    startX = e.pageX - dragger.offsetLeft
    scrollLeft = dragger.scrollLeft
})
dragger.addEventListener("mouseup", () => {
    isDown = false
    // item return clickable
    for(let i of link) i.classList.remove("disable-item")
    // return cursor default
    document.body.style.cursor = `default`
})
dragger.addEventListener("mouseleave", () => {
    isDown = false
})


dragger.addEventListener("mousemove", (e) => {
    if(!isDown) return;
    e.preventDefault();

    // item not clickable
    for(let i of link) i.classList.add("disable-item")
    // change cursor dragging
    document.body.style.cursor = `grab`

    const x = e.pageX - dragger.offsetLeft
    const diff = x - startX
    dragger.scrollLeft = scrollLeft - diff
})

// ------------------------

const buttonLeft = document.getElementsByClassName(`arrow-left`)
const buttonRight = document.getElementsByClassName(`arrow-right`)

let itemDimension = document.querySelectorAll(`.item`)[0].getBoundingClientRect();
let howMuchToScroll = (itemDimension.width) * 3;

buttonLeft[0].addEventListener("mousedown", () => {
    dragger.scrollTo({ top: 0, left: dragger.scrollLeft - howMuchToScroll, behavior: 'smooth' })
})

buttonRight[0].addEventListener("mousedown", () => {
    dragger.scrollTo({ top: 0, left: dragger.scrollLeft + howMuchToScroll, behavior: 'smooth' })
})
