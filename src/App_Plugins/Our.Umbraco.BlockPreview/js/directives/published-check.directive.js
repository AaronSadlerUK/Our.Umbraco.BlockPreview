﻿angular.module('umbraco.filters')
    .directive('publicationCheck', [function () {

        function setStyle(scope, element) {
            //if (typeof scope.settings["hideBlock"] !== "undefined") {
            //    if (scope.settings.hideBlock === '1') {
            //        element[0].style.opacity = 0.25;
            //        return;
            //    }
            //}

            element[0].style.opacity = 1;
            return;
        }

        function link(scope, element, attrs) {

            setStyle(scope, element);

            scope.$watch('settings', function (newValue, oldValue) {
                if (newValue)
                    setStyle(scope, element);
            }, true);

        }

        return {
            restrict: 'A',
            scope: {
                'settings': '=',
            },
            link: link,
        };
    }]);
