import Screen from './screen/screen'
import Handler from './helpers/handler'
import Level1 from './levels/level-1'
import Level2 from './levels/level-2'

let screen = new Screen()



let level = new Level1();




let lastTime = 0

function gameLoop (timestamp) {

  let deltaTime = timestamp - lastTime
  lastTime = timestamp
  screen.ctx.clearRect(0, 0, 640, 480)
  screen.ctx.fillStyle = '#c0c0c0'
  screen.ctx.fillRect(0, 0, 640, 480)
  level.update(deltaTime, screen)
  requestAnimationFrame(gameLoop)
}

gameLoop(lastTime)
