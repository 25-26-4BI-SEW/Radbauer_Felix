class Animal {
    name;
    age;

    constructor(name = 'name', age = 0) {
        this.name = name;
        this.age = age;
    }

    describe() {
        return `${this.name} is ${this.age} years old`;
    }
}


class Dog extends Animal {
    breed;

    constructor(name, age, breed="dog") {
        super(name, age);
        this.breed = breed;
    }

    info() {
        return this.describe() + ` and is of the breed ${this.breed}`;
    }
}


const doggo = new Dog("Doggo", 2, "German Shepherd");
console.log(doggo.describe());
console.log(doggo.info());