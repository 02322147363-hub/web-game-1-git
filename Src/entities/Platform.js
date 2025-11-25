export default class Platform {
    constructor({x, y, width, height, color = '#669BBC'}) {
        this.position = {x, y}
        this.width = width
        this.height = height
        this.color = color
    }

    draw(ctx) {
        ctx.fillStyle = this.color
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}