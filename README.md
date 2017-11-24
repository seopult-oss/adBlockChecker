### adBlockChecker
Module for check AdBlockPlus

Example:
You can see example in ./docs/ (https://seopult-oss.github.io/adBlockChecker/)

**Setup:**

Install with npm
```bash
npm install seopult-ad-block-checker --save
```

Install with bower
```bash
bower install seopult-ad-block-checker --save
```

Usage:

add dependency
```javascript
    angular.module('testApp',['adBlockModule'])
```

inject service
```javascript
    controller: ['adBlockChecker', testController]
```

declare instance in controller
```javascript
    var vm = this;
    vm.adBlockChecker = adBlockChecker;
```

after call 
```javascript
    vm.adBlockChecker.check(delay);
```
if delay > 0 - check will run function check() each delay ms.

adBlock status will be in isAdblockEnabled property
```javascript
    vm.adBlockChecker.isAdblockEnabled
```
