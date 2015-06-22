// jQuery to set the height of the sidebar dynamically
$(function() {

    var resize = function() {
        var NAV_BAR = 56;
        var height = $(window).height() - NAV_BAR;
        $('.sidebar-scroll').height(height);
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

    $scope.itemLimit = 25;

    $scope.select = function(item) {
        $rootScope.selected = item;

        // Lazy loading of the edited field
        if (item.commit.edited_message === undefined) {
            item.commit.edited_message = item.commit.message;
        }

        console.log(item);
    };

    $scope.increaseItemLimit = function() {
        $scope.itemLimit += 25;
    }

    var init = function() {
        $scope.data = ALL_DATA;
        $scope.select($scope.data[0]);
    };

    init();

});

app.controller('detail-controller', function($scope, $location, $rootScope) {

    $scope.save = function() {
        $rootScope.selected.commit.message = $rootScope.selected.commit.edited_message;
    };

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