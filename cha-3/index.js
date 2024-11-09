class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
}

// Child class for Electric Car (EV)
class EV extends Car {
    constructor(make, speed, charge) {
        super(make, speed);
        this.charge = charge; // Charge in %
    }

    // Method to set the charge to a specific value
    chargeBattery(chargeTo) {
        this.charge = chargeTo;
        console.log(`Battery charged to ${this.charge}%`);
    }

    // Override accelerate to increase speed and decrease battery charge
    accelerate() {
        this.speed += 20;
        this.charge -= 1;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
    }
}

// Creating an electric car object
const tesla = new EV("Tesla", 120, 23);
tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
