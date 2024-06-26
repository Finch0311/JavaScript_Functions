console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if(count < 0){
        for(let i = -1; i >= count; i-- ) {
            if(i % 2 != 0){
                console.log(i);
            }
        }   
    } else{
        for(let i = 1; i <= count; i++ ) {
            if(i % 2 != 0){
               console.log(i);
            } 
        }    
    }
}
printOdds(-100);
printOdds(100);
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkAge(userName, age){
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if(age == null){
        console.log("Try again.")
        return;
    }
    
    if(age < 16){
        console.log(belowSixteen);
    } else{
        console.log(aboveSixteen);
    }
}
checkAge();
checkAge("Gary", 12);
checkAge("Max", 300);


console.log("EXERCISE 3:\n==========\n");
// Exercise 3 Section
function treasureChest(x , y){
    if(x > 0 && y > 0){
        console.log(`(${x} , ${y}) is in quadrant 1.`)
    } else if(x < 0 && y < 0){
        console.log(`(${x} , ${y}) is in quadrant 3.`)
    } else if(x < 0 && y > 0){
        console.log(`(${x} , ${y}) is in quadrant 4.`)
    } else if(x > 0 && y < 0){
        console.log(`(${x} , ${y}) is in quadrant 2.`)
    } else if(x == 0 && y == 0){
        console.log(`(${x} , ${y}) is at the origin.`)
    } else if(y > 0 || y < 0){
        console.log(`(${x} , ${y}) is on the y axis.`)
    } else if(x > 0 || x < 0){
        console.log(`(${x} , ${y}) is on the x axis.`)
    } else{
        return "Did you give me any numbers bruv?";
    }
    
}
treasureChest(0, 2);
treasureChest(2, 2);
treasureChest(0, 0);
treasureChest(2, 0);
treasureChest(-2, -2);
treasureChest(0, -2);
treasureChest(-2, 0);
treasureChest(2, -2);
treasureChest(-2, 2);
treasureChest();
console.log("EXERCISE 4:\n==========\n");
// Exercise 4 Section
function isTriangle(x, y, z) {
    if (x === 0 || y === 0 || z === 0){
        return "Does not make a shape.";
    } else if(x === null || y === null || z === null) {
        return "Does not make a shape.";
    }
    if((x + y < z && x + z < y && y + z < x)){
        return "does not make a triangle";
    }
    if (x == y && y == z) {
        return `Sides (${x}), (${y}), (${z}) make an equilateral triangle.`;
    } else if (x == y || x == z || y == z) {
        return `Sides (${x}), (${y}), (${z}) make an isosceles triangle.`;
    } else {
        return `Sides (${x}), (${y}), (${z}) make a scalene triangle.`;
    }
}

// Example usage:
console.log(isTriangle(4, 5, 6)); 
console.log(isTriangle(2, 2, 3));  
console.log(isTriangle(9, 9, 9));    
console.log(isTriangle(6, null, 8));
console.log(isTriangle(0, 2, 4));   



console.log("EXERCISE 5:\n==========\n");

function cellData(planLimit, day, usage){
    if(planLimit <= 0){
        console.log("Invalid plan limit.")
        return;
    }
    if(usage < 0 || day <=0 || day > 30){
        console.log("Invalid usage or day.")
        return;
    }
    
    let remainingData = planLimit - usage;
    let remainingDays = 30 - day;
    let averageUse = usage / day;
    let recommendedUse = planLimit / 30;
    let correctedData =  remainingData / remainingDays;
    let response;
    if(remainingData <= 0){
        response = "My name is ATT Mobility, you killed my data. Prepare to disconnect!" // Inigo Montoya anyone??
    } else if(usage == 0){
        repsonse = "Have you turned your phone on?"
    } else if(usage < planLimit){
        response = "You are STILL WITHIN the confines of your CONTRACT...Enjoy."
    } 

    let feedback = `
    Data limit: ${planLimit}
    Total data used: ${usage}
    Today is the ${day} day out of 30. You have ${remainingDays} left. This is our recommended 
    use per day for your plan: ${recommendedUse}
    You have used ${usage} GB out of ${planLimit}. On average, that is ${averageUse} GB a day. 
    Results of our findings are... ${response}. To get back on track we recommend that you use
    ${correctedData} GB per day until day 30.`;
    
    console.log(feedback);
}
cellData(100, 12, 200);
cellData(0, 13, 1);
cellData(10, 31, 10);
cellData(150, 1, 145);
cellData(100, 9, 50);


