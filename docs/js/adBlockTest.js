(function () {
    'use strict';
    angular.module('testApp', ['adBlockModule'])
        .component('testComponent', {
            template: '<h2>Test adBlock</h2><p>adblock status: {{$ctrl.isAdBlockEnabled}}</p><button ng-click="$ctrl.checkAdBlock()">test</button>',
            controller: ['adBlockChecker', testController]
        });

    function testController(adBlockChecker) {
        var vm = this;

        vm.isAdBlockEnabled = false;

        vm.checkAdBlock = function () {
            vm.isAdBlockEnabled = adBlockChecker.isAdblockEnabled();
        };
    }
})();