(function(){
  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

/* Shopping List CheckOff service*/
  function ShoppingListCheckOffService(){
    var shoppingList = this;

    shoppingList.toBuyItems = [
      {
        name:'Cookies',
        quantity:10
      },
      {
        name:'Biscuits',
        quantity:5
      },
      {
        name:'Chips',
        quantity:100
      },
      {
        name:'Chocolate Cookies',
        quantity:5
      },
      {
        name:'Milk',
        quantity:2
      }
    ];

    shoppingList.boughtItems = [];

    shoppingList.getToBuyItems = function(){
      return shoppingList.toBuyItems;
    };
    shoppingList.boughtItem = function(index){
      var item  = shoppingList.toBuyItems.splice(index,1);
      Array.prototype.push.apply(shoppingList.boughtItems,item);
    };
    shoppingList.getAlreadyBoughtItems = function(){
       return shoppingList.boughtItems;
    }

  };

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuy = this;
    toBuy.message = 'Everything is bought!';
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();
    toBuy.bought = function(index){
      ShoppingListCheckOffService.boughtItem(index);
    }
  };


  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var alreadyBought = this;
    alreadyBought.message = 'Nothing bought yet';
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }
})();
