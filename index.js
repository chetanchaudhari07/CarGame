function Vehicle(brand, model, speed, fuelType) {
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;
}

Vehicle.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`is accelerating. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.brake = function() {
    this.speed -= 10;
    console.log(`is braking. Current speed: ${this.speed} km/h`);
};

Vehicle.prototype.refuel = function() {
    console.log(`${this.brand} ${this.model} is refueling.`);
};

function Car(brand, model, speed, fuelType, numberOfWheels) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfWheels = numberOfWheels;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function() {
    console.log("Honk!!!!!!");
};

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear) {
    Vehicle.call(this, brand, model, speed, fuelType);
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;
}

Airplane.prototype = Object.create(Vehicle.prototype);
Airplane.prototype.constructor = Airplane;

Airplane.prototype.takeOff = function() {
    console.log(`is taking off.`);
};

var Car1 = new Car("Toyota", "Camry", 0, "Gasoline", 4);
console.log(Car1);
var Airplane1 = new Airplane("Boeing", "747", 0, "Jet fuel", 4, true);
console.log(Airplane1);
Car1.accelerate(); 
Car1.brake();      
Car1.refuel();    
Car1.honk();       

Airplane1.accelerate(); 
Airplane1.brake();      
Airplane1.refuel();     
Airplane1.takeOff();