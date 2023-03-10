//canvas setup

const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = 900
canvas.height = 506

ctx.font = "50px Verdana"

//Mouse interactivity
let canvasPosition = canvas.getBoundingClientRect()
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false,
}

canvas.addEventListener("mousedown", function (event) {
  mouse.click = true
  mouse.x = event.x - canvasPosition.left
  mouse.y = event.y - canvasPosition.top
  console.log("coordinates each time I click -->", mouse.x, mouse.y)
})

window.addEventListener("mouseup", function (event) {
  mouse.click = false
})
