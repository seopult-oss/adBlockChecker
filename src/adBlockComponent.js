(function () {
    'use strict';
    angular.module('adBlockModule', [])
        .service('adBlockChecker', ['$window', '$timeout', function ($window, $timeout) {
            return {
                isAdblockEnabledVal: false,
                check: function () {
                    var self = this;
                    if (adBlock === undefined) {
                        var adBlock = new $window.FuckAdBlock;
                        adBlock.onDetected(function () {
                            $timeout(function () {
                                self.isAdblockEnabledVal = true;
                            }, 0);
                        });
                        adBlock.onNotDetected(function () {
                            $timeout(function () {
                                self.isAdblockEnabledVal = false;
                            }, 0);
                        });
                        adBlock.check();
                    } else {
                        adBlock.check();
                    }

                    return this.isAdblockEnabledVal;
                }
            }
        }]);
})();