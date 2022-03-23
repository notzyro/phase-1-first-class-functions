function receivesAFunction (cb) {
    console.log(cb());
}
receivesAFunction(function () {return "I am cool"});

function returnsANamedFunction(){
    return receivesAFunction;
  }
  returnsANamedFunction(function receivesAFunction() {return "I am cool"});
function returnsAnAnonymousFunction () {
    return returnsAnAnonymousFunction;
}
returnsAnAnonymousFunction(function () { return ""});