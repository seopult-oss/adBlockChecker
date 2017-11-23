(function () {
    'use strict';
    angular.module('adBlockModule', [])
        .service('adBlockChecker', ['$window', '$timeout', function ($window, $timeout) {
            return {
                isAdblockEnabled: false,
                check: function () {
                    var self = this;
                    if (adBlock === undefined) {
                        var adBlock = new $window.FuckAdBlock;
                        adBlock.onDetected(function () {
                            $timeout(function () {
                                self.isAdblockEnabled = true;
                            }, 0);
                        });
                        adBlock.onNotDetected(function () {
                            $timeout(function () {
                                self.isAdblockEnabled = false;
                            }, 0);
                        });
                        adBlock.check();
                    } else {
                        adBlock.check();
                    }

                    return this.isAdblockEnabled;
                }
            }
        }]);
})();