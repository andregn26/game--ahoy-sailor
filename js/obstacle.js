//Obstacle
class Rock {
  constructor(radius, speed) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = speed
    this.distance
    this.damage = -30
    this.damageCounted = false
  }
  update() {
    this.y += this.speed
    const dx = this.x - player.x
    const dy = this.y - player.y
    this.distance = Math.sqrt(dx * dx + dy * dy)
  }
  draw() {
    ctx.fillStyle = "brown"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}
class Seagul {
  constructor(radius, speed) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = speed
    this.distance
  }
  update() {
    this.y += this.speed
    this.x += Math.cos(seagulsCurrentTime) * 3 // y = ƒ(x)
    const dx = this.x - player.x
    const dy = this.y - player.y
    this.distance = Math.sqrt(dx * dx + dy * dy)
  }
  draw() {
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}

class Fish {
  constructor(radius, speed) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = speed
    this.distance
    this.pointCounted = false
  }
  update() {
    this.y += this.speed
    this.x += Math.sin(fishesCurrentTime) * 3 // y = ƒ(x)
    const dx = this.x - player.x
    const dy = this.y - player.y
    this.distance = Math.sqrt(dx * dx + dy * dy)
  }
  draw() {
    ctx.fillStyle = "yellow"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}
