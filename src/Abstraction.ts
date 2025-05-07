{
    // Abstraction 1: interface, 2: abstract class

    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class Car implements Vehicle1{
        startEngine(): void {
            console.log('Start the car');
        }
        stopEngine(): void {
            console.log('stop the car');
        }
        move(): void {
            console.log('move the car');
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine()

    // abstract class

    abstract class Vehicle2 {
       abstract startEngine(): void
       abstract stopEngine(): void
       abstract move(): void 
    }

    class Car2 extends Vehicle2{
        startEngine(): void {
            console.log('start the car2');
        }
        stopEngine(): void {
            console.log('stop the car 2');
        }
        move(): void {
            console.log('stop the car2');
        }
    }

    const hondaCar = new Car2();
    hondaCar.stopEngine();
    

    // 
}