class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // Speed in km/h
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

    // Getter to get the speed in mi/h
    get speedUS() {
        return this.speed / 1.6;
    }

    // Setter to set the speed in mi/h (converts to km/h)
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
}

// Creating a new CarCl object
const ford = new CarCl("Ford", 120);
ford.accelerate();
ford.brake();

// Testing getter and setter
console.log(`Speed in mi/h: ${ford.speedUS}`); // Convert km/h to mi/h
ford.speedUS = 75; // Set speed in mi/h and convert to km/h
console.log(`New speed in km/h: ${ford.speed}`);
