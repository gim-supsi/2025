function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)

	for (let i=0; i<100; i++) {
		let gl = random(10, 150)
		let gx = random(0, width)
		let gy = random(-gl, height)

		strokeWeight(random(1, 3))
		stroke(255, random(100, 255))
		line(gx, gy, gx, gy + gl)
	}


}