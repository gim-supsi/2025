
// questa funzione viene chiamata all'inizio
function setup() {
	createCanvas(400, 400)
}


// mentre questa funzione è un ciclo
// e verrà eseguita fino alla fine dei giorni
function draw() {

	background(255)

	strokeWeight(5)
	stroke(255, 20, 0)
	point(80, 100)

	line(100, 100, 150, 300)

	stroke(0, 200, 100)
	strokeWeight(1)

	fill(255, 255, 160,)
	rect(115, 130, 60, 80)

	fill(255, 200, 200, 160)

	rect(125, 140, 60)

	ellipse(290, 150, 70)
	noFill()
	ellipse(280, 140, 70)

	fill(255,0,0)
	beginShape()
	vertex(200, 240)
	vertex(300, 210)
	vertex(220, 310)
	endShape(CLOSE)

}

