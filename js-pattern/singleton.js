    //singleton

    var mySingleton = (function () {
      var instance = true;
      function init() {
        function privateMetod() {
          console.log('I am private')
        }
        var privateVariable = 'I am also private'

        var privateRandomeNumber = Math.random();
      }
      return {
        publicMethod: function () {
          console.log('i am public see me!')
        },

        publicProperty: 'I am also public!',

        getRundomeNumber: function () {
          return privateRandomeNumber
        }
      }
    return {getinstance: function(){
      if(!instance){
        instance = init()
      }
      return instance
    }
    
    }
    }) ()
    var singleA = mySingleton.getRundomeNumber()
    var singleB = mySingleton.getRundomeNumber()
    console.log(singleA === singleB)
    console.log(singleA.getRundomeNumber()=== singleB.getRundomeNumber())