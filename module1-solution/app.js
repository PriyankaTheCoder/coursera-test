(function(){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.checkLunch = function(){
    let lunch = $scope.lunch;
    if(lunch && lunch !== ""){
      let lunchItems = lunch.split(',');
      // not considering an empty item
      for(let index=0;index<lunchItems.length;index++){
        if(lunchItems[index] === ""){
          lunchItems.splice(index,1);
          index--;
        }
      }
      if(lunchItems.length <= 3){
        $scope.message = "Enjoy!";
      }else{
        $scope.message = "Too much!";
      }
    }else{
      $scope.message = "Please enter data first!";
    }
  };

// check the message and change the border color accordingly
  $scope.checkLunchItems = function(message){
    if(message && message !== ""){
      if(message === "Please enter data first"){
        return 'redBorder';
      }else{
        return 'greenBorder';
      }
    }
  };

// check the message and change the font color accordingly
  $scope.checkMessage = function(message){
    if(message && message !== ""){
      if(message === "Please enter data first"){
        return 'redFont';
      }else{
        return 'greenFont';
      }
    }
  };

};
})();
