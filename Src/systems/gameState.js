let isWin = false

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
