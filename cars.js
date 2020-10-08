/*
Jennifer Ryan - G00362599
Data Representation and Querying
Lab 1 - Question 3 
Vehicle class should take make, model and year as arguments and a method that will write this information.
Car class will inherit from Vehicle class with a method that writes Number of Doors to the console.
*/

//Vehicle class take make, model and year in as variables and include a method to write this information.
class Vehicle{

    //Vehicle Constructor, contains the varibles to write the make, model and year.
    constructor(make, model, year){
        //Instance Variables
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //Method to display make, model and year in the Vechicle class.
    Information(){
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }

}

/*Displays the result of the Information method using the class Vehicle.
    let myVehicle = new Vehicle('Renult', 'Cleo', 2010);
    let info = myVehicle.Information();
*/


//Car class will inherit from Vehicle class with a method that writes Number of Doors to the console.
class Cars extends Vehicle{

     //Cars Constructor, inherits the varibles(make, model and year) from the Vehcile class and writes the number of doors.
    constructor(make, model, year, doors){
        //Inherited Variables 
        super(make, model, year);
        //InstanceVariables
        this.doors = doors;
    }

    //Method to display make, model, year and doors inherited from the Vechicle class and the Cars class.
    Information(){
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }
}

//Displays the result of the Information method within the class Cars.
let myCar = new Cars('Nissan', 'Almera', 2014, 5);
myCar.Information();



