function outer() {
    let outerVar = 'I am outside!';
    
    function inner() {
      console.log(outerVar); // Accesses outerVar from the outer function
    }
    
    return inner;
  }
  
  const closureFunction = outer();
  closureFunction(); // Output: 'I am outside!'
  