(function() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i ++) {
    var string = names[i].toLowerCase();
    // console.log('string', string);
    if (string.startsWith("j")) {
      sayBye.speak(names[i]);
    } else {
      sayHello.speak(names[i]);
    }
  }
})();





