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
    this.sound = "crash"
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
  constructor(radius) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = Math.random() * 0.1 + 0.5
    this.distance
    this.angle = Math.random()
    this.angleSpeed = Math.random() * 0.1
  }
  update() {
    this.y += this.speed
    this.x += 2 * Math.cos(this.angle) // y = ƒ(x)
    this.angle += this.angleSpeed
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
    this.speed = Math.random() * 0.8 + 1
    this.distance
    this.angle = Math.random()
    this.angleSpeed = Math.random() * 0.1
    this.pointCounted = false
  }
  update() {
    this.y += this.speed
    this.x += Math.sin(this.angle) * 0.3 // y = ƒ(x)
    this.angle += this.angleSpeed
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
