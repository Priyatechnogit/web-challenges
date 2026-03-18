console.clear();

/*
Let's calculate some interesting facts based on a user's age! 
The program expects the user to provide their age as a numerical input. 
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days the person has lived.
2. The estimated number of remaining days, assuming an average life span of 80 years.
3. The percentage of life already lived, in relation to the expected life span.
4. The cumulative number of days the person has spent sleeping, assuming an average of 8 hours of sleep per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const currentAge = Number(process.argv[2]); // This takes the `<age>` entered in the command `node index.js <age>`.

console.log("Your current age is: " + currentAge);
const totalDaysLived = currentAge * 365;
console.log("Total days lived: " + totalDaysLived);
const lifeSpan = 80;
const remainingDays = (lifeSpan - currentAge) * 365;
console.log("Estimated remaining days: " + remainingDays);
const percentageLived = ((currentAge / lifeSpan) * 100).toFixed(1) + "%";
console.log("Percentage of life lived: " + percentageLived);
const daysSleeping = totalDaysLived / 3;
console.log("Days spent sleeping: " + Math.round(daysSleeping));
console.log ("Your current age is " + currentAge + " your Total days lived is " + totalDaysLived +  
    " The Percentage of life you lived is " + percentageLived  + " and finally the days you spent sleeping is " + daysSleeping)
