class Traveler {

    constructor (name) {

        this.name = name
        this.food = 1
        this.isHealthy = true

    }

    hunt() {
        return this.food += 2
    }

    eat () {
        return this.food -= 1
    }

    checkIsHealthy() {
        const food = this.food

        if (food < 1) {
            this.isHealthy = false
        }

        return isHealthy()
    }

}

// console.log(Traveler)