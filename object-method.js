var fiat = {
    make: 'Fiat',
    model: '500',
    year: 1957,
    color: 'red',
    passengers: 3,
    mileage: 23440,
    started: false,
    fuel: 0,
    start: function () {
        if (this.fuel > 0) {
            this.started = true;
        } else {
            console.log('The car is on empty, fill up before starting');
        }

    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.make + ' ' + this.model + ' goes Zoom Zoom');
                this.fuel = this.fuel - 1;
            } else {
                console.log('Out of fuel');
                this.stop();
            }
        }
    },
    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};
fiat.start();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();