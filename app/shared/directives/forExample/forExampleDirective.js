app.directive('forExample' , function(){
    return {
        templateUrl: "shared/forExample/forExample.html",
        link: function(scope, element, attrs) {
            scope.forExampleData = attrs.data;
        }
    }
});
