// jQuery to set the height of the sidebar dynamically
$(function() {

    var resize = function() {
        var NAV_BAR = 56;
        var FILTER = 50;
        var height = $(window).height() - NAV_BAR;
        $('.sidebar-scroll').height(height - FILTER);
        $('.detail').height(height);
    };

    resize();

    $(window).resize(resize);
});

/*
 * Angular App
 */

var app = angular.module('app', []);

app.controller('sidebar-controller', function($scope, $location, $rootScope) {

    $scope.select = function(item) {
        $rootScope.selected = item;
        console.log(item);
    };

    var init = function() {
        $scope.data = ALL_DATA;
        $rootScope.selected = $scope.data[0];
    }

    init();

});

app.controller('detail-controller', function($scope, $location, $rootScope) {

});

/*
 * This filter is taken from
 * https://github.com/igreulich/angular-truncate/blob/master/src/igTruncate.js
 */
app.filter('truncate', function (){
  return function (text, length, end){
    if (text !== undefined){
      if (isNaN(length)){
        length = 10;
      }

      if (end === undefined){
        end = "...";
      }

      if (text.length <= length || text.length - end.length <= length){
        return text;
      }else{
        return String(text).substring(0, length - end.length) + end;
      }
    }
  };
});