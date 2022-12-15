//Animate loop
function time() {
  if (gameFrame % 30 === 0) {
    seagulsCurrentTime += 0.5
    fishesCurrentTime += 4
  }
}

function animateCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  time()
  player.update()
  player.draw()
  gameFrame++
  handleRocks()
  handleSeaguls()
  handleFishes()
  ctx.fillStyle = "black"
  ctx.fillText("score: " + currentScore, 10, 50)
  ctx.fillStyle = "black"
  ctx.fillText("life: " + currentLife, 400, 50)

  requestAnimationFrame(animateCanva)
  // console.log(time)
}

animateCanva()
