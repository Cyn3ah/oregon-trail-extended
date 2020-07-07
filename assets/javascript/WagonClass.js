class Wagon {

    constructor (capacity) {
        
        this.capacity = capacity
        this.passengers = []
        this.shouldQuarantine = false

    }

    getAvailableSeatCount() {
        const passengerCount = passengers.length
        const emptySeats = (capacity - passengerCount)

        if (emptySeats = 0) {
            this.emptySeats = false
        }

        return emptySeats()
    }

    join (Traveler) {
        append.passengers(this.passenger)
        passengerCount = passengers.length
    }

    shouldQuarantine () {
        const isHealthy = capacity.length

        if (isHealthy > 1)
        return true
    }


}

// console.log(Traveler)

// Let myWagon = new Wagon(5)
// Constructor (capacity) {}
