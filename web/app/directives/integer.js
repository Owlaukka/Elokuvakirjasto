MovieApp.directive('integer', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$validators.integer = function (modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    return true;
                }
                
                
                var INTEGER_REGEXP = /^\-?\d+$/;
                if (INTEGER_REGEXP.test(viewValue)) {
                    return true;
                }
                
                return false;
            };
        }
    };
});