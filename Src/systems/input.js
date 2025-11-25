import { inputLocked } from "./gameState.js"
import { keys } from "./inputKeys.js"

window.addEventListener('keydown', (event) => {
})

window.addEventListener("keydown", (e) => {
    if (inputLocked()) return

    switch (e.code) {
        case "KeyD":
            keys.d.pressed = true
            break
        case "KeyA":
            keys.a.pressed = true
            break
        case "ArrowRight":
            keys.arrowRight.pressed = true
            break
        case "ArrowLeft":
            keys.arrowLeft.pressed = true
            break
        case "KeyW":
        case "ArrowUp":
            keys.space.pressed = true
            break
    }
})

window.addEventListener("keyup", (e) => {
    if (inputLocked()) return

    switch (e.code) {
        case "KeyD":
            keys.d.pressed = false
            break
        case "KeyA":
            keys.a.pressed = false
            break
        case "ArrowRight":
            keys.arrowRight.pressed = false
            break
        case "ArrowLeft":
            keys.arrowLeft.pressed = false
            break
        case "KeyW":
        case "ArrowUp":
            keys.space.pressed = false
            break
    }
})