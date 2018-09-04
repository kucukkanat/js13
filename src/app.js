import Scene from 'class/Scene'
import Ball from 'class/Ball'
import Cube from 'class/Cube'

// Create Scene
const scene = new Scene()
scene.addToBody()

// Create Game Objects
const ball = new Ball(scene)
const platform = new Cube(scene)

ball.x = 150
ball.y = 100
ball.height=20
ball.ddy=0.98
ball.ddx=0.001
ball.r = 30

platform.width=500
platform.height=20
platform.x=100
platform.y = scene.canvas.height-100
// Create Game Objects

setTimeout(()=>{
    ball.removeForces()
    ball.dy = 0
    ball.ddx=-0.1
},10000)

// Game logic 
const gameLoop = () => {
    scene.clear()
    scene.draw()
    requestAnimationFrame(gameLoop)
}
gameLoop()
