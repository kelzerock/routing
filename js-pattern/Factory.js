//Factory

function Car(options){
  this.door = options.door || 4;
  this.state = options.state || "brand new";
  this.color = options.color || "silver";
}

function Truck (options){
  this.state = options.state || "used";
  this.wheelSize = options.wheelSize || "large";
  this.color = options.color || "blur";
}

function VehicleFactory(){

}
VehicleFactory.prototype.vehicleClass = Car;

VehicleFactory.prototype.createVehicle = function(options){
  switch(options.vehicleType){
    case "car":
      this.vehicleClass = Car;
      break;
    case "truck":
      this.vehicleClass = Truck;
      break;
  }
  return new this.vehicleClass(options)
}

var carFactory = new VehicleFactory()

var car = carFactory.createVehicle(
  {
    vehicleType: 'car',
    color: 'yellow',
    door: 6
  }
)

var truck = carFactory.createVehicle(
  {
    vehicleType: 'truck',
    color: "yellow",
    state: 'new'
  }
)

console.log(car)
console.log(truck)