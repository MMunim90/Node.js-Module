function f1() {
  console.log("karim");
}

function f1() {
  console.log("rahim");
}

// f1()


// IIFE
(() => {
  function f1() {
    console.log("karim");
  }

  f1();
})();


(() => {
  function f1() {
    console.log("rahim");
  }

  f1();
})();