(function () {
    'use strict';
    angular.module('testApp',['adBlockModule'])
        .component('testComponent', {
            template: '<h2>Test adBlock</h2><p>adblock status: {{$ctrl.adBlockChecker.isAdblockEnabled}}</p>',
            controller: ['adBlockChecker', testController]
        });

    function testController(adBlockChecker) {
        var vm = this;

        vm.adBlockChecker = adBlockChecker;

        vm.adBlockChecker.check(10000);
    }
})();