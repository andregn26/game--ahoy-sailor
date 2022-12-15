//Animate loop

function animateCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  if (gameFrame % 30 === 0) {
    time += 0.5
  }
  player.update()
  player.draw()
  ctx.fillStyle("black")
  ctx.fillText("score: " + score, 10, 50)
  gameFrame++
  handleRocks()
  handleSeaguls()

  requestAnimationFrame(animateCanva)
  // console.log(time)
}

animateCanva()
