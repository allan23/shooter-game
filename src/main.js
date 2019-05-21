import Screen from './screen/screen'
import Enemy from './components/enemy'
import Player from './components/player'
import Particle from './components/particle'
import Handler from './helpers/handler'

let screen = new Screen()

let handler = new Handler()

handler.add(new Player(20, 20, 20, 20))

handler.add(new Enemy(20, 20, 200, 200))

let lastTime = 0

function gameLoop (timestamp) {

  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  screen.ctx.clearRect(0, 0, 640, 480)
  screen.ctx.fillStyle = '#c0c0c0'
  screen.ctx.fillRect(0, 0, 640, 480)
  handler.update(deltaTime, screen)
  requestAnimationFrame(gameLoop)
}

gameLoop(lastTime)
