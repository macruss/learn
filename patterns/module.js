var someModule = (function () {

  // private attributes
  var privateVar = 5;

  // private methods
  var privateMethod = 
  function () {
    return 'Private Test';
  };

  return {
    // public attributes
    publicVar: 10,
    publicMethod:
    function () {
      return ' Followed By Public Test ';
    },

    // let's access the priavate members
    getData:
    function () {
      return privateMethod() + this.publicMethod() + privateVar;
    }
  }
})(); 

someModule.getData();