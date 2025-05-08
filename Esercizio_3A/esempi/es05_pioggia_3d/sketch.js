function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background(0)


	rotateX(-mouseY * 0.01)
	rotateY(-mouseX * 0.01)

	//box(50, 50, 50)

	let dimensione = 1000

	for (let i=0; i<1000; i++) {
		let gl = random(10, 150)
		let gx = random(-dimensione, dimensione)
		let gy = random(-dimensione, dimensione - gl)
		let gz = random(-dimensione, dimensione)

		strokeWeight(random(1, 2))
		stroke(255, random(100, 255))
		line(gx, gy, gz,       gx, gy + gl, gz)
	}



}