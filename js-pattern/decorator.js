// decorator

function Vehicle(vehicleType){
  this.vehicleType = vehicleType || "car";
  this.model = "new";
  this.license = "1222";
}

var truck = new Vehicle("truck")
truck.setColor = function(color){
  this.color = color
}

truck.setColor('green')

var insuranceFunc 

function MacBook(){
  this.cost = function(){ return 997}
  this.screenSize = function(){return 11.6;}

insuranceFunc= function insurance(macbook){
    var v = macbook.cost();
    macbook.cost = function(){
      return v + 250
    }
  }
}

var laptop = new MacBook();
insuranceFunc(laptop)
console.log(laptop.cost)