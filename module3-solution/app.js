(function(){
  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService',MenuSearchService)
  .directive('foundItems',FoundItems)
  .constant('ApiBasePath','https://davids-restaurant.herokuapp.com');

  function FoundItems(){
    var ddo = {
      templateUrl :'foundItems.html',
      scope:{
        items:'<',
        onRemove: '&'
      },
      controller : FoundItemController,
      controllerAs : 'list',
      bindToController : true,
      transclude : true
    }
    return ddo;
  }

  function FoundItemController(){

  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    let list = this;

    // list all the searched items
    list.showFoundItems = function(searchedItem){
      var promise = MenuSearchService.getMatchedMenuItems(searchedItem);
      promise.then(function(result){
        list.message = "";
        list.found = [];
        let items = result;
        if(items.length === 0){
          list.message = "Nothing found!!!"
        }else{
          list.found = items;
        }
      }).catch(function(error){
          console.log(error);
      })
    };

    // remove selected item
    list.removeItem = function(index){
      list.found.splice(index,1);
    };
  }

  // menu services
  MenuSearchService.$inject = ['$http','ApiBasePath'];
  function MenuSearchService($http,ApiBasePath){
    var service = this;
    service.getMatchedMenuItems = function(searchItem){
      var found = [],menuItems;
      return $http({
        method:'GET',
        url : (ApiBasePath + '/menu_items.json')
      }).then(function(result){
          menuItems = result.data.menu_items;
          menuItems.forEach(function(elem,index){
              if(elem.description.indexOf(searchItem) !== -1){
                found.push(elem);
              }
          });
          return found;
      });
    }
  }
})();
