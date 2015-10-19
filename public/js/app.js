/*angular.module('socialMedia', ['ngMaterial']);*/

angular.module('socialMedia').controller('LoginCtrl',['$scope', '$http', 'socialOAuth', function($scope, $http, socialOAuth){
    $scope.gotData = false;
    $scope.facebookLogin = function(){
        console.log("You have clicked on facebook");
        socialOAuth.facebookOAuth().then(function(data){
            $scope.profileData = data;   
            $scope.gotData = true;
            console.log(JSON.stringify($scope.profileData));
        });
    };
    $scope.googlePluseLogin = function(){
        console.log("You have clicked on Google Plus");
        socialOAuth.gpOAuth().then(function(data){
            $scope.profileData = data;           
            $scope.gotData = true;  
            console.log(JSON.stringify($scope.profileData));
        });
    };
    $scope.twitterLogin = function(){
        console.log("You have clicked on twitter");
        socialOAuth.twitterOAuth().then(function(data){
            $scope.profileData = data;             
            $scope.gotData = true;
            console.log(JSON.stringify($scope.profileData));
        });
    };
}]);