function liftWeights() {
    console.log("Pump iron");
}

function runFiveMiles() {
    console.log("Go for a five-mile run");
}

function Monday() {
    exerciseRoutine(liftWeights);
}
  
function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
}

function receivesAFunction (spy) {
  console.log('hello');
  spy();
}

function spy() {
  console.log('call meeee');
}

receivesAFunction(spy);


function returnsANamedFunction () {
    return spy;
}



function returnsAnAnonymousFunction() {
    return function(x, y) {
        console.log(x + y)(2, 3);
    }
}


/* describe("index", () => {
  describe("receivesAFunction(callback)", () => {
    it("receives a function and calls it", () => {
      const spy = chai.spy();

      receivesAFunction(spy);

      expect(spy).to.have.been.called();
    });
  });

  describe("returnsANamedFunction()", () => {
    var fn;

    before(() => {
      fn = returnsANamedFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns a named function", () => {
      expect(fn.name).not.to.eql("");
    });
  });

  describe("returnsAnAnonymousFunction()", () => {
    var fn;

    before(() => {
      fn = returnsAnAnonymousFunction();
    });

    it("returns a function", () => {
      expect(fn).to.be.a("function");
    });

    it("returns an anonymous function", () => {
      expect(fn.name).to.eql("");
    });
  });
});
 */