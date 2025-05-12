function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(200)
	noStroke()

	translate(width/2, height/2)

	fill(0)
	for(let i=0; i<60; i++) {
		push()
		rotate(i / 60 * TWO_PI)
		if (i % 5 == 0) {
			ellipse(0, -180, 15)
		} else {
			ellipse(0, -180, 5)
		}
		pop()
	}

	// ore
	push()
	const angoloOre = (hour() / 12 + minute() / 60 / 12) * TWO_PI
	rotate(angoloOre)
	fill(0)
	rect(-10, 20, 20, -130)
	pop()

	// minuti
	push()
	const angoloMinuti = minute() / 60 * TWO_PI
	rotate(angoloMinuti)
	fill(0)
	rect(-8, 20, 16, -180)
	pop()

	// secondi
	push()
	const angoloSecondi = second() / 60 * TWO_PI
	rotate(angoloSecondi)
	fill(255,0,0)
	rect(-3, 20, 6, -200)
	ellipse(0, -180, 28)
	pop()

	// centrino
	// fill(255)
	// ellipse(0, 0, 5)

}