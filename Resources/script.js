class Animal {
    constructor(species, sound){
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`sound:${this.sound}`);
    }
}

