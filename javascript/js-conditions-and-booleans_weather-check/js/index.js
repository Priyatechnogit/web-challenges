// Change this value to test different "weather" conditions.
const weather = "rainy"

// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22; 

switch (weather){
    case "sunny":
        if (temperature  > 20) {
      console.log("It's sunny and warm!");
    } else {
      console.log("It's seems like sunny, but actually a bit chilly!");
    }
        break;
    case "rainy":
        console.log("Hey, it's rainy today and don't forget to wear Rain jacket");
        break;
    case "snowy":
        if (temperature  < 0) {
        console.log("Hey, it's Freezing");
        }
        else {
        console.log("Hey, it's snowy and don't forget to wear warm clothes");
        }
        break;
    default:
        console.log("Hey, i could predict the weather today");
        break;
        
}