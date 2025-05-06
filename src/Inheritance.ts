{
    // Inheritance 

    class Parent {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleeping(numOfHours: number) {
            console.log(`${this.name} got sleep for ${numOfHours}`);
        }
    }

    class Student extends Parent {
        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

      
    }

    class Teacher extends Parent {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        } 
        takeClass(numOfClass: number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }



    // 
}