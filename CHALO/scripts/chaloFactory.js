angular
      .module('ngchalo')
      .factory("chalosFactory", function($http){
        function getChalos(){
            return $http.get('data/data.json');
        }

        return{
            getChalos : getChalos
        }

      });