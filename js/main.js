// jQuery to set the height of the sidebar dynamically
$(function() {

    var resize = function() {
        var NAV_BAR = 56;
        var height = $(window).height() - NAV_BAR;
        $('.sidebar').height(height);
    };

    resize();

    $(window).resize(resize);
});

/*
 * Angular App
 */

var app = angular.module('app', []);

app.controller('sidebar-controller', function($scope, $location) {
    $scope.message = 'Sidebar';
    $scope.data = ALL_DATA;
});

app.controller('detail-controller', function($scope, $location) {
    $scope.message = 'Detail';
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