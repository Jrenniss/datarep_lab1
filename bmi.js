/*
Jennifer Ryan - G00362599
Data Representation and Querying
Lab 1 - Question 2 
Calculating the BMI of a person using height and weight and returning the result.
*/

//Class BMI is used to calculate the BMI of a person, using Height and Weight.
class BMI {

    //BMI Constructor, contains the varibles to calculate BMI.
    constructor(height, weight) {
        //Instances Variables
        this.height = height;
        this.weight = weight;
    }

    //Method used to calculate BMI using height and weight.
    calculateBMI() {
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}

//Using the class BMI.
let MyBMI = new BMI(82, 80);

//Using the calculateBMI method 
let calculateBMI = MyBMI.calculateBMI();

//Displays the result of the calculateBMI method.
console.log(calculateBMI);