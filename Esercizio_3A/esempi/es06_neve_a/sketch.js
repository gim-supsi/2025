let px1, py1, dim1
let px2, py2, dim2

function setup() {
	createCanvas(windowWidth, windowHeight)

	px1 = random(0, width)
	py1 = random(-100)
	dim1 = random(10, 20)

	px2 = random(0, width)
	py2 = random(-100)
	dim2 = random(10, 20)


}

function draw() {

	px1 = px1 + random(-1.5, 1.5)
	py1 = py1 + random(0.8, 1.2)

	if(py1 > height) {
		py1 = 0
	}

	px2 = px2 + random(-1.5, 1.5)
	py2 = py2 + random(0.8, 1.2)

	if(py2 > height) {
		py2 = 0
	}


	background(0)

	fill(255)
	textAlign(CENTER, CENTER)

	textSize(dim1)
	text("✽", px1, py1)

	textSize(dim2)
	text("✲", px2, py2)


}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}


/*

*✺✱✳✲✽❋☸⧆⊛⁕⁎﹡∗

*/



