(function(){
    'use strict';

    function ItemController(items){
        var ctrl = this;
        ctrl.items = items;
    }
    ItemController.$inject = ['items']
    angular.module('MenuApp')
    .controller('ItemController',ItemController)
})();