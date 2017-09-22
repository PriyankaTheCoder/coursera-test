(function(){
    'use strict';

    function CategoryController(categories){
        let mainList = this;
        mainList.categories = categories.data;
    }

    CategoryController.$inject=['categories'];

    angular.module('MenuApp')
    .controller('CategoryController',CategoryController);
})();