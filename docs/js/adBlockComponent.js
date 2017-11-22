(function () {
    'use strict';
    angular.module('adBlockModule', [])
        .service('adBlockChecker', ['$window', function ($window) {
            return {
                isAdblockEnabledVal: false,
                isAdblockEnabled: function () {
                    var self = this;
                    if (adBlock === undefined) {
                        var adBlock = new $window.FuckAdBlock;
                        console.log(adBlock);
                        adBlock.onDetected(function () {
                            self.isAdblockEnabledVal = true;
                        });
                        adBlock.onNotDetected(function () {
                            self.isAdblockEnabledVal = false;
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