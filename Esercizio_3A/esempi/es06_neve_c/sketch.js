
let fiocchi



function setup() {
	createCanvas(windowWidth, windowHeight)


	fiocchi = []

	fiocchi[0] = {
		px : random(0, width),
		py : random(-100),
		dim : random(10, 20),
	}

	fiocchi[1] = {
		px : random(0, width),
		py : random(-100),
		dim : random(10, 20),
	}

	fiocchi[2] = {
		px : random(0, width),
		py : random(-100),
		dim : random(10, 20),
	}

}

function draw() {

	background(0)
	fill(255)
	textAlign(CENTER, CENTER)


	// --------------------
	fiocchi[0].px = fiocchi[0].px + random(-1.5, 1.5)
	fiocchi[0].py = fiocchi[0].py + random(0.8, 1.2)

	if(fiocchi[0].py > height) {
		fiocchi[0].py = 0
	}

	textSize(fiocchi[0].dim)
	text("✽", fiocchi[0].px, fiocchi[0].py)




	// --------------------
	fiocchi[1].px = fiocchi[1].px + random(-1.5, 1.5)
	fiocchi[1].py = fiocchi[1].py + random(0.8, 1.2)

	if(fiocchi[1].py > height) {
		fiocchi[1].py = 0
	}

	textSize(fiocchi[1].dim)
	text("✽", fiocchi[1].px, fiocchi[1].py)




	// --------------------
	fiocchi[2].px = fiocchi[2].px + random(-1.5, 1.5)
	fiocchi[2].py = fiocchi[2].py + random(0.8, 1.2)

	if(fiocchi[2].py > height) {
		fiocchi[2].py = 0
	}

	textSize(fiocchi[2].dim)
	text("✽", fiocchi[2].px, fiocchi[2].py)

}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


/*

*✺✱✳✲✽❋☸⧆⊛⁕⁎﹡∗

*/



