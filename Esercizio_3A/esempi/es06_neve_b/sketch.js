
let fiocco1

function setup() {
	createCanvas(windowWidth, windowHeight)

	fiocco1 = {
		px : random(0, width),
		py : random(-100),
		dim : random(10, 20),
	}

}

function draw() {

	fiocco1.px = fiocco1.px + random(-1.5, 1.5)
	fiocco1.py = fiocco1.py + random(0.8, 1.2)

	if(fiocco1.py > height) {
		fiocco1.py = 0
	}

	background(0)

	fill(255)
	textAlign(CENTER, CENTER)

	textSize(fiocco1.dim)
	text("✽", fiocco1.px, fiocco1.py)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


/*

*✺✱✳✲✽❋☸⧆⊛⁕⁎﹡∗

*/



