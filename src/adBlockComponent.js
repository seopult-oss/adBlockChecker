(function () {
    'use strict';
    angular.module('adBlockModule', [])
        .service('adBlockChecker', ['$window', '$timeout', '$interval', function ($window, $timeout, $interval) {
            return {
                isAdblockEnabled: false,
                isCheckerActive: undefined,
                check: function (delay) {
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

                    if (delay && self.isCheckerActive == undefined) {
                        $interval(function () {
                            self.isCheckerActive = adBlock.check();
                        }, delay);
                    }

                    return this.isAdblockEnabled;
                },
                stop: function () {
                    var self = this;
                    if (angular.isDefined(self.isCheckerActive)) {
                        $interval.cancel(self.isCheckerActive);
                        self.isCheckerActive= undefined;
                        return true;
                    }
                    return false;
                }
            }
        }]);
})();