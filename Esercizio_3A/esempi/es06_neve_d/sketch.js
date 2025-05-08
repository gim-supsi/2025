
let fiocchi



function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocchi = []

	const f = "*✺✱✳✲✽❋☸⧆⊛⁕⁎﹡∗"

	for(let i=0; i<400; i++) {
		fiocchi[i] = {
			px : random(0, width),
			py : random(-100),
			// dim : random(10, 20),
			vel : random(1, 3),
			chr : f[Math.floor(random(f.length))],
			colore : color(random(255), random(255), random(255))
		}
	}
}

function draw() {

	background(0)
	textAlign(CENTER, CENTER)

	// lento:
	// textSize(fiocchi[i].dim)

	textSize(50)

	for (let i=0; i<fiocchi.length; i++) {
		fiocchi[i].px = fiocchi[i].px + random(-1.5, 1.5)
		fiocchi[i].py = fiocchi[i].py + fiocchi[i].vel

		if(fiocchi[i].py > height + 100) {
			fiocchi[i].py = -100
		}

		fill(fiocchi[i].colore)
		text( fiocchi[i].chr, fiocchi[i].px, fiocchi[i].py)
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

