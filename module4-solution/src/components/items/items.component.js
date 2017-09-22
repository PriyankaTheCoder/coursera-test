(function(){
    'use strict';
    
    angular.module('MenuApp')
    .component('menuItems',{
        templateUrl : 'src/components/items/items.template.html',
        bindings : {
            items : '<'
        }
    })
})();