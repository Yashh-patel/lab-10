class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    // Method to increase the speed by 10
    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }

    // Method to decrease the speed by 5
    brake() {
        this.speed -= 5;
        console.log(`${this.make} is now going at ${this.speed} km/h`);
    }
}

// Creating two Car objects
const car1 = new Car("BMW", 120);
const car2 = new Car("Mercedes", 95);

// Testing accelerate and brake methods on each car
car1.accelerate();
car1.brake();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
