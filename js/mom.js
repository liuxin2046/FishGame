var momObj = function(){
	this.x;
    this.y;
    this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
}
momObj.prototype.init = function(){
	this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
	this.bigEye.src = "./src/bigEye0.png";
	this.bigBody.src = "./src/bigSwim0.png";
	this.bigTail.src = "./src/bigTail0.png";
}
momObj.prototype.draw = function(){
    this.x = lerpDistance(mx,this.x,0.9);
    this.y = lerpDistance(my,this.y,0.9);  
    var deltaY = my - this.y;
    var deltaX = mx - this.x;
    var bate = Math.atan2(deltaY,deltaX) + Math.PI;
    this.angle = lerpAngle(bate,this.angle,0.6);
    ctx1.save();
   
    ctx1.translate(this.x,this.y);//use(x,y) as the center point
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigTail,-this.bigTail.width * 0.5 + 30,-this.bigTail.height * 0.5);
	
	ctx1.drawImage(this.bigBody,-this.bigBody.width * 0.5,-this.bigBody.height * 0.5);
	ctx1.drawImage(this.bigEye,-this.bigEye.width * 0.5,-this.bigEye.height * 0.5);
	ctx1.restore();
}