let isWin = false
let easyMode = true

export function setWin(v) { isWin = v }
export function getWin() { return isWin }
export function resetWin() { isWin = false }

let inputLock = false

export function lockInput() {
    inputLock = true
}

export function unlockInput() {
    inputLock = false
}

export function inputLocked() {
    return inputLock
}

export function runEasyMode() {
    easyMode = true
}

export function runHardMode() {
    easyMode = false
}

export function modeRun() {
    return easyMode
}
