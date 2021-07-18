angular
     .module('ngchalo')
     .filter('chalosFilter', function(){

       return function(listings, nameInfo){
        
        var filtered = [];

        var min = nameInfo.min;
        var max = nameInfo.max;

        angular.forEach(listings, function(listing){
            if (listing.name >= min && listing.name <= max){
               filtered.push(listing);
            }
        });
         return filtered;
       }

     });