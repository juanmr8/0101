let font
let grafico

function preload(){
    font = loadFont('assets/spacegrotesk-medium.otf')
}

function setup () {
    createCanvas(600, 600)


    grafico = createGraphics(600, 600)

    grafico.fill("#000000")
    grafico.textFont(font)
    grafico.textSize(800)
    grafico.textAlign(CENTER, CENTER)
    grafico.text("a", 300, 240)
}

function draw() {
    background("#ffffff")

    const tileSize = 50

    for (let x = 0; x < 12; x = x + 1) {

        for (let y = 0; y < 12; y = y + 1) {
            const distorsion = sin(frameCount * 0.05 + x * 0.5 + y * 0.3) * 50

            //source
            const sx = x * tileSize + distorsion
            const sy = y * tileSize
            const sw = tileSize
            const sh = tileSize
            
            //destination
            const dx = x * tileSize 
            const dy = y * tileSize
            const dw = tileSize
            const dh = tileSize

            image(grafico,  dx, dy, dw, dh, sx, sy, sw,sh)
        }

    }
}