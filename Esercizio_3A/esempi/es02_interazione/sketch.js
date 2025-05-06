function setup() {
	createCanvas(300, 500)
	background(255, 200, 20)
}

function draw() {
	if (mouseIsPressed) {
		fill(random(255), random(255), random(255))
		ellipse(mouseX, mouseY, 60)
		ellipse(width - mouseX, mouseY, 60)
	}
}

function keyPressed() {
	if (key == "s") {
		save("immagine.png")
	} else if (key == "x") {
		background(random(255), random(255), random(255))
	}
}
