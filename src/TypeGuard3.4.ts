{
    // instanceOf guard

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species
        }

        makeSound() {
            console.log('Making sound');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species);
        }

        makeBark() {
            console.log('Barking');
        }
    };

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log('Meawing');
        }
    };
    const isDog = (animal: Animal): animal is Dog  => {
        return animal instanceof Dog; 
    }
    const isCat = (animal: Animal): animal is Cat  => {
        return animal instanceof Cat; 
    }

    const getAnimal = (animal: Animal) => {
        // if (animal instanceof Dog) {
        //     animal.makeBark()
        // }
        // else if (animal instanceof Cat) {
        //     animal.makeMeaw()
        // }
        // else {
        //     animal.makeSound()
        // }
        if(isDog(animal)){
            animal.makeBark()
        }else if(isCat(animal)){
            animal.makeMeaw() 
        }else{
            animal.makeSound()
        }
    }

    const dog = new Dog('boolDog', 'Dog')
    const cat = new Cat('Tom', 'Cat')

    getAnimal(cat);
    // 
}