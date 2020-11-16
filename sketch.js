var car, wall;
var speed, weight;
var deformation;



function setup() {
    createCanvas(1600,400);

    speed = Math.round(random(30, 90));
    weight = Math.round(random(400, 1500));

    car = createSprite(50, 200, 50, 50);
    wall = createSprite(1500, 200, 60, height / 2);
	
	car.velocityX = speed;
	
	deformation = (0.5 * weight * speed * speed) / 22500;
	console.log(deformation);

}

function draw() {
    background("cyan");

    if (wall.x - car.x < (car.width + wall.width) / 2) {
        car.velocityX = 0;
        
        if (deformation > 180) {
            car.shapeColor = "red";
        }
        else if (deformation < 180 && deformation > 100) {
            car.shapeColor = "yellow";
        }
        else if (deformation < 100) {
            car.shapeColor = "green";
        }
		else {
			car.shapeColor = "black";
		}
    }

    drawSprites();
}