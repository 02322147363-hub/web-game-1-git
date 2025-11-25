const charWidth = 20
const charHeight = 50
const cageVertices = 75
const groundHeight = 50
const canvasWidth = 1024
const canvasHeight = 576

export const levels = [
    {
        // Level 1
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 760,
            y: canvasHeight - charHeight - groundHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight }
        ],
        enemies: []
    },
    {
        // Level 2
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 860,
            y: canvasHeight - charHeight - groundHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight },
            { x: canvasWidth - 600, y: 375, width: 600, height: 20 }
        ],
        enemies: [
            { x: 860, platformIndex: 1 }
        ]
    },
    {
        // Level 3
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 950,
            y: 225 - charHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight },
            { x: canvasWidth - 700, y: 375, width: 300, height: 20 },
            { x: canvasWidth - 300, y: 225, width: 300, height: 20 }
        ],
        enemies: [
            { x: canvasWidth - 700 + 150, platformIndex: 1 },
            { x: canvasWidth - 300 + 150, platformIndex: 2 }
        ]
    },
    {
        // Level 4
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 700,
            y: 225 - charHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight },
            { x: 0, y: 375, width: 500, height: 20 },
            { x: 600, y: 225, width: 200, height: 20}
        ],
        enemies: [
            { x: 270, platformIndex: 1 },
            { x: 400, platformIndex: 1 }
        ]
    },
    {
        // Level 5
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 502,
            y: 225 - charHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight },
            { x: 0, y: 375, width: 320, height: 20 },
            { x: canvasWidth - 320, y: 375, width: 320, height: 20 },
            { x: 374, y: 225, width: 275, height: 20}
        ],
        enemies: [
            { x: 276, platformIndex: 1 },
            { x: canvasWidth - 250, platformIndex: 2 },
            { x: canvasWidth - 150, platformIndex: 2 },
            { x: 427, platformIndex: 3 },
            { x: 587, platformIndex: 3 }
        ]
    },
    {
        // Level 6
        player: {
            x: 50,
            y: canvasHeight - charHeight - groundHeight
        },
        target: {
            x: 25,
            y: 225 - charHeight
        },
        cage: {
            x: 120,
            y: canvasHeight - cageVertices - groundHeight
        },
        platforms: [
            { x: 0, y: canvasHeight - groundHeight, width: canvasWidth, height: groundHeight },
            { x: 0, y: 375, width: canvasWidth - 150, height: 20 },
            { x: 0, y: 225, width: 150, height: 20 },
            { x: canvasWidth - 150, y: 225, width: 150, height: 20}
        ],
        enemies: [
            { x: 275, platformIndex: 1 },
            { x: 400, platformIndex: 1 },
            { x: 525, platformIndex: 1 },
            { x: 650, platformIndex: 1 },
            { x: 775, platformIndex: 1 },
            { x: 100, platformIndex: 2 },
            { x: canvasWidth - 125, platformIndex: 3 },
            { x: canvasWidth - 50, platformIndex: 3 }
        ]
    }
]
