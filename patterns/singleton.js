var Singleton = (function () {
  var instatiated;

  function init() {
    //singleton here
    return {
      publicMethod: function () {
        console.log(this.publicProperty);
      },
      publicProperty: 'hello world'
    };
  }

  return {
    getInstance: function () {
      if (!instatiated) {
        instantiated = init();
      };
      return instantiated;
    }

  };
})();

var single1 = Singleton.getInstance();
var single2 = Singleton.getInstance();
single1.publicMethod();
single2.publicMethod();

