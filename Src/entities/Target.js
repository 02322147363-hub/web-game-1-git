import Sprite from "./Sprite.js"

export default class Target extends Sprite {
    constructor(args) {
        super(args)
        this.facing = 1
    }

    follow(player, deltaTime) {
        const accel = 900
        const maxSpeed = 120
        const deccel = 0.95
        const rangeX = 200
        const rangeY = 175 

        const dy = player.position.y - this.position.y
        const distanceY = Math.abs(dy)

        const dx = player.position.x - this.position.x
        const distanceX = Math.abs(dx)

        const isSameHeight = distanceY <= rangeY
        const isInRangeX = distanceX <= rangeX

        if (isSameHeight && isInRangeX) {
            this.velocity.x += dx > 0 ? accel * deltaTime : -accel * deltaTime
        } else {
            this.velocity.x *= deccel
        }

        if (this.velocity.x > maxSpeed) this.velocity.x = maxSpeed
        if (this.velocity.x < -maxSpeed) this.velocity.x = -maxSpeed
    }

    update(deltaTime, ctx, gravity, canvasWidth) {
        super.update(deltaTime, ctx, gravity, canvasWidth)
    }
}
