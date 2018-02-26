var fruitObj = function(){
    this.alive = [];//boolean
    this.x = [];
    this.y = [];
    this.fruitType = [];
    this.spd = [];
    this.l = [];
    this.orange = new Image();
    this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
    for(var i=0;i<this.num;i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.fruitType[i] = "";
        this.spd[i] = Math.random()*0.01 + 0.005;
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
}
    fruitObj.prototype.draw = function(){
        var pic = "";
        for(var i=0;i<this.num;i++){
            if(this.alive[i]){
                if(this.fruitType[i] == "blue"){
                     pic = this.blue;
                }else{
                     pic = this.orange;
                }
                if(this.l[i]<=15){
                    this.l[i] += this.spd[i] * deltaTime;
                } 
                else {
                    this.y[i] -= this.spd[i] * 7 *deltaTime;
                }
                ctx2.drawImage(pic,this.x[i] - this.l[i] * 0.5,this.y[i] - this.l[i] * 0.5,this.l[i],this.l[i]);    
                if(this.y[i] < 10){
                    this.alive[i] = false;
                }
            }

        }

    }
    fruitObj.prototype.born = function(i){
        var aneID = Math.floor(Math.random()*ane.num);
        this.x[i] = ane.x[aneID];
        this.y[i] = canHeight - ane.len[aneID];
        this.l[i] = 0;
        this.alive[i] = true;
        var ran  = Math.random();
        if(ran<0.2){
            this.fruitType[i] = "blue";
        }else{
            this.fruitType[i] = "orange";
        }
    }

    fruitObj.prototype.update = function(){



    }
    fruitObj.prototype.dead = function(i){
        this.alive[i] = false;
    }
    function fruitMonitor(){
        var num = 0;
        for(var i=0;i<fruit.num;i++){
            if(fruit.alive[i]){
                num++;
            } 
        }
        if(num<15){
            sendFruit();
            //console.log("ok");
            return;
        }
    }
    function sendFruit(){
        for(var i=0;i<fruit.num;i++){
            if(!fruit.alive[i])
            {
                fruit.born(i);
                return;
            }
        }

    }