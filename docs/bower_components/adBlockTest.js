(function () {
    'use strict';
    angular.module('testApp',['adBlockModule'])
        .component('testComponent', {
            template: '<h2>Test adBlock</h2><p>adblock status: {{$ctrl.adBlockChecker.isAdblockEnabledVal}}</p><button ng-click="$ctrl.checkAdBlock()">test</button>',
            controller: ['adBlockChecker', testController]
        });

    function testController(adBlockChecker) {
        var vm = this;

        vm.adBlockChecker = adBlockChecker;

        vm.checkAdBlock = function () {
            vm.adBlockChecker.check();
        };
    }
})();