function fizzBuzz(n) {
    var n = document.getElementById("input").value;
    function fizzBuzzRecursive(n) {
    var results = [];
      if (n === 1) {
        return '1';
      } else {
        if (n % 3 === 0 && n % 5 === 0) {
          results.push('FizzBuzz');
        } else if (n % 5 === 0) {
          results.push('Buzz');
        } else if (n % 3 === 0) {
          results.push('Fizz');
        } else {
          results.push(''+ n);
        }
        return results.concat(fizzBuzzRecursive(n - 1));
      }
    }
    var result = fizzBuzzRecursive(n).reverse();
    document.getElementById("demo").innerHTML = result;
  };

  document.getElementById("btninput").addEventListener("click", fizzBuzz);


  