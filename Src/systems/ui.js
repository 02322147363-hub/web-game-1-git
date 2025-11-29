import { resetInput } from "./inputKeys.js"
import { lockInput, unlockInput } from "./gameState.js"
import { resetWin } from "./gameState.js"
import { runEasyMode, runHardMode } from "./gameState.js"

export function createUIManager({ loadLevel, animate, levels, canvas }) {
    let currentLevel = 0
    let gameRunning = false

    function show(id) {
        document.getElementById(id).style.display = "flex"
        lockInput()
        gameRunning = false
    }

    function hide(id) {
        document.getElementById(id).style.display = "none"
        unlockInput()
        gameRunning = true
    }

    // ---------- MAIN MENU ----------
    document.getElementById("playBtn").onclick = () => {
        hide("mainMenu")
        show("selectMode")
    }

    document.getElementById("easyBtn").onclick = () => {
        hide("selectMode")
        runEasyMode()
        resetWin()
        currentLevel = 0
        window.dispatchEvent(new CustomEvent("selectLevel", { detail: currentLevel }))
    }

    document.getElementById("hardBtn").onclick = () => {
        hide("selectMode")
        runHardMode()
        resetWin()
        currentLevel = 0
        window.dispatchEvent(new CustomEvent("selectLevel", { detail: currentLevel }))
    }

    document.getElementById("creditBtn").onclick = () => {
        hide("mainMenu")
        show("creditMenu")
    }

    document.getElementById("tutorBtn").onclick = () => {
        hide("mainMenu")
        show("tutorMenu")
    }

    document.getElementById("backToMainFromCredit").onclick = () => {
        hide("creditMenu")
        show("mainMenu")
    }

    document.getElementById("backToMainFromTutor").onclick = () => {
        hide("tutorMenu")
        show("mainMenu")
    }

    // ---------- WIN ----------
    document.getElementById("nextLevelButton").onclick = () => {
        currentLevel++
        window.dispatchEvent(new CustomEvent("selectLevel", { detail: currentLevel }))
        hide("winScreen")
    }

    // ---------- LOSE ----------
    document.getElementById("retryButton").onclick = () => {
        window.dispatchEvent(new CustomEvent("selectLevel", { detail: currentLevel }))
        hide("loseScreen")
    }

    // ---------- END ----------
    document.getElementById("endToMainBtn").onclick = () => {
        currentLevel = 0
        window.dispatchEvent(new CustomEvent("returnToMenu"))
        hide("endScreen")
        show("mainMenu")
    }

    // mulai dari main menu
    show("mainMenu")

    function restartLevel() {
        currentLevel = 0
        window.dispatchEvent(new CustomEvent("selectLevel", { detail: currentLevel }))
    }

    function showWin() {
        show("winScreen")   // tampilkan UI-nya
        lockInput()
        resetInput()
    }

    function showLose() {
        show("loseScreen")
        lockInput()
        resetInput()
    }

    function showEnd() {
        show("endScreen")
        lockInput()
        resetInput()
    }

    
    function goToMainMenu() {
        gameRunning = false
        lockInput()
        resetInput()

        hide("winScreen")
        hide("loseScreen")
        hide("creditMenu")
        hide("endScreen")

        show("mainMenu")
    }


    return {
        goToMainMenu,
        pauseGame: () => {
            gameRunning = false
            lockInput()
            show("pauseMenu")
        },
        isGameRunning: () => gameRunning,
        showWin,
        showLose,
        showEnd,
        restartLevel
    }
}
