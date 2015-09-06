var fbOutput = document.getElementById('fbOutput');
var inputNumber = prompt("Input a number:");
fizzBuzz(inputNumber);

  function fizzBuzz(inputNumber) {
    if (inputNumber < 1){
      fbOutput.innerHTML += ("Sorry, that is not allowed, please use a number greater than 1");
    } else {
      for (i=1; i<= inputNumber; i++) {
        if(i%3 == 0 && i%5 == 0) {
          fbOutput.innerHTML += ("FizzBuzz" +'<br />');
        }
        else if (i%3 == 0){
            fbOutput.innerHTML += ("fizz"+ '<br />');
        }
        else if(i%5 == 0) {
            fbOutput.innerHTML += ("buzz" +'<br />');
        }
        else {
            fbOutput.innerHTML += (i +'<br />');
        }
      }
    }
  }
