class Wagon {

    constructor (capacity) {
        
        this.capacity = capacity
        this.passengers = []

    }

    getAvailableSeatCount() {
        const passengerCount = this.passengers.length
        const emptySeats = (this.capacity - passengerCount)

        return emptySeats
    }

    join (traveler) {

        if (this.getAvailableSeatCount() > 0) {
        this.passengers.push(traveler)
        }
    }

    shouldQuarantine () {

        return this.passengers.some(traveler => (traveler.isHealthy === false))

    }

    totalFood () {

        return this.passengers.food

    }

}