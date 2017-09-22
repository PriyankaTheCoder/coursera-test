(function(){
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function RoutesConfig($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/');

        $stateProvider
        /* Home Page */
        .state('home',{
            url:'/',
            templateUrl :'src/components/home/home.template.html'
        })
        /* Categories */
        .state('categories',{
            url:'/categories',
            templateUrl:'src/components/categories/mainCategory.template.html',
            controller : 'CategoryController as mainList',
            resolve :{
                'categories':['MenuDataService',function(MenuDataService){
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        /* Items */
        .state('items',{
            url:'/categories/{id}/items',
            templateUrl : 'src/components/items/itemContainer.template.html',
            controller :'ItemController as itemList',
            resolve : {
                'items':['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
                    return MenuDataService.getItemsForCategory($stateParams.id);
                }]
            },
            params : {id : null}

        })

    }
})();