/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/
let hand = [];


function handValue (hand) {
  var sum = 0;
  for (i = 0; i < hand.length; i++)
  if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J") {
    console.log("10 hits");
    sum += 10;
    console.log(sum);
  } else if (hand[i] === "2"){
    sum += 2;
    console.log("2 hits");
    console.log(sum);
  }else if (hand[i] === "3"){
    sum += 3;
    console.log("3 hits");
    console.log(sum);
  }else if (hand[i] === "4"){
    sum += 4;
    console.log("4 hits");
    console.log(sum);
  }else if (hand[i] === "5"){
    sum += 5;
    console.log("5 hits");
    console.log(sum);
  }else if (hand[i] === "6"){
    sum += 6;
    console.log("6 hits");
    console.log(sum);
  }else if (hand[i] === "7"){
    sum += 7;
    console.log("7 hits");
    console.log(sum);
  }else if (hand[i] === "8"){
    sum += 8;
    console.log("8 hits");
    console.log(sum);
  }else if (hand[i] === "9"){
    sum += 9;
    console.log("9 hits");
    console.log(sum);
  }else if (hand[i] === "10"){
    sum += 10;
    console.log("10 hits");
    console.log(sum);
  }
  else if (hand[i] === "A" && sum >= 11) {
    sum += 1;
    console.log("ace 1 hit");
    console.log(sum);
  }
  else if (hand[i] === "A" && sum <= 10) {
    sum += 11;
    console.log("ace 11 hits");
    console.log(sum);
  }



  return sum;
}
//need to make it known that k, q, j have a value of 10
//make it known that an A is either 1 or 11
//If hand is at a value of 11 or more, ace will need to be one, else ace will be 11
//function needs to take string in array and convert it into an integer
//function needs to output sum of integers that are ps



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
