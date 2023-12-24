// class => Blueprint to create a Object
class Vehicle{
    constructor(){
        this.color = "red";
    }
    sysomthing(){
        console.log("hello world");
    }
}

let obj1 = new Vehicle();
console.log(obj1);
obj1.sysomthing();
let obj2 = new Vehicle();
console.log(obj2);

// class with parameter
class Bike{
    constructor(para1,para2){
        this.color = para1;
        this.passenger = para2;
    }
    methods(){
        console.log(`total passenger is: ${this.passenger}`);
        console.log(`bike color is: ${this.color}`);
    }

}
let b1 = new Bike("red",2);
console.log(b1);
b1.methods();

// Inheritance
// derived class
class pulser extends Bike{
    constructor(wheels,passenger,color){
        super(color,passenger);
        this.wheels = wheels;
    }
}
let p = new pulser(2,3,"yellow");
console.log(p);



