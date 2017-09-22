(function () {
    'use strict';

    function MenuDataService($http,$q) {
        let service = this;

        service.getAllCategories = function(){
            let deferred = $q.defer();
            $http.get('https://davids-restaurant.herokuapp.com/categories.json')
            .then(categories=>{
                deferred.resolve(categories)
            });
            return deferred.promise;
        }

        service.getItemsForCategory = function(categoryShortName){
            let deferred = $q.defer();
            $http({url:'https://davids-restaurant.herokuapp.com/menu_items.json?category='+categoryShortName
              })
            .then(items=>{
                deferred.resolve(items.data);
            });
            return deferred.promise;
        }
    }

    MenuDataService.$inject = ['$http','$q'];
    angular.module('data')
        .service('MenuDataService', MenuDataService);
})();