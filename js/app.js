var utility;
var numbers = [];

for(var i = 1; i <= 100; i++){
    utility = i;
    if (utility % 3 == 0){
        if (utility % 5 == 0){
            utility = "fizz buzz";
        } else {
            utility = "fizz";
        }
    }
    else if( utility % 5 == 0){
        utility = "buzz";
    }
    numbers.push(utility);
}

alert(numbers);