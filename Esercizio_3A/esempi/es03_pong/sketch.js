let posX
let velX

let posY, velY


function setup() {
	createCanvas(500, 400)

	posX = 200
	velX = 3

	posY = 100
	velY = 2

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
	let d = map(sin(frameCount * 0.11), -1, 1, 20, 100)
	let r = map(sin(frameCount * 0.13), -1, 1, 0, 255)
	let g = map(sin(frameCount * 0.14), -1, 1, 0, 255)
	let b = map(sin(frameCount * 0.16), -1, 1, 0, 255)
	// fill(frameCount % 2 * 255)
	fill(r, g, b)
	ellipse(posX, posY, d)



}

