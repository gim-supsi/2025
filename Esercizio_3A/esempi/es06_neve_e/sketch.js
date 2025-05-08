let fiocchi

function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocchi = []

	const f = "ABCDEFGHIJKLMONPQRSTUVWXYZ0123456789"

	for(let i=0; i<200; i++) {
		fiocchi[i] = {
			px : random(0, width),
			py : random(0, height),
			chr : f[Math.floor(random(f.length))],
			colore : color(random(255), random(100, 200), random(100,200), 200)
		}
	}
}

function draw() {

	background(0)
	textAlign(CENTER, CENTER)

	textSize(100)

	for (let i=0; i<fiocchi.length; i++) {


		let dx = fiocchi[i].px - mouseX
		let dy = fiocchi[i].py - mouseY

		let distanza = Math.sqrt(dx * dx + dy * dy)

		if (distanza < 100) {
			fiocchi[i].px += dx * 0.05
			fiocchi[i].py += dy * 0.05
		}

		textSize(distanza)
		fill(fiocchi[i].colore)
		text( fiocchi[i].chr, fiocchi[i].px, fiocchi[i].py)
	}

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}
