let posX
let velX

let posY, velY


function setup() {
	createCanvas(500, 400)

	posX = 200
	velX = 7

	posY = 100
	velY = 4

	background(255,0,0)
}

function draw() {

	posX = posX + velX
	posY = posY + velY


	// if(posX >= width) {
	// 	velX = -velX
	// } else if (posX < 0) {
	// 	velX = -velX
	// }

	if(posX >= width || posX < 0) {
		velX = -velX
	}

	if(posY >= height || posY < 0) {
		velY = -velY
	}



	//background(190)

	noStroke()
	fill(frameCount % 2 * 255)
	let d = map(sin(frameCount * 0.1), -1, 1, 10, 200)
	ellipse(posX, posY, d)



}

