function setup() {
	createCanvas(600, 400)
}

function draw() {
	background(200)

	translate(width/2, height/2)


	noStroke()


	const numeroDiTentacoli = 8

	for(let j=0; j<numeroDiTentacoli; j++) {
		push()
		rotate(TWO_PI / numeroDiTentacoli * j)
		for(let i=0; i<8; i++) {
			const a = noise(i * 0.1, j * 0.1, frameCount * 0.01) * 4 - 2
			rotate(a)
			const l = map(noise(i, j), 0, 1, 40, 100)
			fill(0)
			rect(0, -5, l, 10)
			fill(255)
			ellipse(0, 0, 10)
			translate(l, 0)
			scale(0.8)
		}
		pop()
	}



}