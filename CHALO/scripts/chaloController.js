angular
      .module('ngchalo')
      .controller('chaloController', function($scope, chalosFactory){
         
         $scope.chalos;

         $scope.nameInfo = {
             min : 0,
             max : 100000
         }

         $scope.newListing = {};

         $scope.addCrib = function(newListing){
             newListing.image = 'chalo-1';
             $scope.chalos.push(newListing);
             $scope.newListing = {};
         }

         $scope.editCrib = function(chalo) {
             $scope.editListing = true;
             $scope.existingListing = chalo;
         }
        
        $scope.saveCribEdit = function(){
            $scope.existingListing = {};
            $scope.editListing = false;
        }

        $scope.deleteCrib = function(listing){
            var index = $scope.chalos.indexOf(listing);
            $scope.chalos.splice(index,1)
            $scope.existingListing = {};
            $scope.editListing = false;
        }

         chalosFactory.getChalos().success(function(data) {

            $scope.chalos = data;

         }).error(function(error){
             console.log(error);
         })

      });