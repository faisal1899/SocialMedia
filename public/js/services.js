//angular.module('starter.services', [])
//angular.module('starter.services').constant('CONSTANTS',{
  //sfs:''

//})
angular.module('socialMedia', ['ngMaterial']).factory('socialOAuth', function($http, $q) {
    // Might use a resource here that returns a JSON array


    //$http.get('rgtrgrdg').then(function(){},function(){
    // })
    // Some fake testing data
    var fbDummyData = {
        username: "San Diago",
        gender: "male",
        dob: "25/05/1970",
        email: "sam1980@hotmail.com"
    },
    gpDummyData = {
        username: "Huge Jackman",
        gender: "male",
        dob: "18/06/1980",
        email: "hugejack@gmail.com"
    },
    twDummyData = {
        username: "Sandra Bullock",
        gender: "female",
        dob: "12/06/1985",
        email: "iamsandra@yahoo.com"
    };

    var facebookLogin = function(ctrlScope){
        var d = $q.defer(); 
        $http.get("http://www.w3schools.com/angular/customers.php").success(function(response) {  
            //assign response to profileData in order to get reflected on UI.
            //e.g $scope.profileData = response.data;
            //TODO: remove this hardcoded JSON once you the user profile.
            d.resolve(fbDummyData);
        }).error(function(err){
            console.log(err);
            d.reject(err);
        });
        return d.promise;
    };
    
    var googleLogin = function(){
        var d = $q.defer(); 
        $http.get("http://www.w3schools.com/angular/customers.php").success(function(response) {  
            //assign response to profileData in order to get reflected on UI.
            //e.g $scope.profileData = response.data;
            //TODO: remove this hardcoded JSON once you the user profile.
            d.resolve(gpDummyData);
        }).error(function(err){
            console.log(err);
            d.reject(err);
        });
        return d.promise;
    };
    
    var twitterLogin = function(){
        var d = $q.defer(); 
        $http.get("http://www.w3schools.com/angular/customers.php").success(function(response) {  
            //assign response to profileData in order to get reflected on UI.
            //e.g $scope.profileData = response.data;
            //TODO: remove this hardcoded JSON once you the user profile.
            d.resolve(twDummyData);
        }).error(function(err){
            console.log(err);
            d.reject(err);
        });
        return d.promise;
    };

    return {
        facebookOAuth: function() {
            return facebookLogin();
        },
        gpOAuth: function() {
            return googleLogin();
        },
        twitterOAuth: function() {
            return twitterLogin();
        },
    };
});
