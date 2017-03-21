var GreetApp = angular.module('GreetApp', ['ngRoute']);
GreetApp.controller('HomeController', function ($scope) {
    $scope.greeting = "Welcome to the application.";
    $scope.body_class = 'blue';
});
GreetApp.controller('SearchDataController', function ($scope) {
    //$scope.content = "As a software developer, I've always loved to build things...";
    $scope.body_class = 'white';
    $scope.show_result = false;
    $scope.firstname = '';
    $scope.lastname = '';
    $scope.current_time = '8:30 AM';
    $scope.show_invalid_entry_time_msg = false;
    $scope.showResult = function() {
        return $scope.firstname == 'Jay' && $scope.lastname == 'Angeles';
    };
    $scope.toggleTime = function() {
        if($scope.current_time == '8:30 AM') {
            $scope.current_time = '9:50 AM';
        } else {
            $scope.current_time = '8:30 AM';
        }
    };

    $scope.selectEntry = function() {
        if($scope.current_time == '8:30 AM') {
            window.location = '#/invalid-timein-time'
        } else {
            window.location = '#/confirm-checkin'
        }
    };
});
GreetApp.controller( 'ConfirmCheckinController', function($scope) {
    $scope.body_class = 'white';
});
GreetApp.controller( 'DangerousGoodsController', function($scope, $sce) {
    $scope.action = 'dangerous-goods';
    $scope.body_class = 'white';
    $scope.header_text = $sce.trustAsHtml('');
    $scope.body = 'dangerous goods';
    $scope.current_time = '9:51 AM';
    $scope.footer_text = 'Security Declaration';
});
GreetApp.controller( 'ElectronicDeviceController', function($scope, $sce) {
    $scope.body_class = 'white';
    $scope.action = 'electronic-device';
    $scope.header_text = $sce.trustAsHtml('Are you bringing any electronic devices Today?');
    $scope.body = 'electronic device';
    $scope.current_time = '9:51 AM';
    $scope.footer_text = 'Electronic Devices Declaration';
});
GreetApp.controller( 'ElectronicDeviceSelectController', function($scope, $sce) {
    $scope.device = {
        brand : '',
        serial_no : ''
    }
    $scope.body_class = 'white';
    $scope.action = 'electronic-device-select';
    $scope.header_text = $sce.trustAsHtml('We have detected that you have registered devices in our system.');
    $scope.body = 'electronic device select';
    $scope.current_time = '9:51 AM';
    $scope.footer_text = 'Select from registered device or add new device';
    $scope.registered_devices = [
        'iPAD – 9ZXA123444', 'Lenovo – 10ZX-A123444'
    ];

    $scope.addDevice = function() {
        var brand = $scope.device.brand;
        var serialNo = $scope.device.serial_no;
        if(brand.trim() && serialNo.trim()) {
            $scope.registered_devices.push(brand.trim() + ' - ' + serialNo.trim());
        } else {
            alert('Please input value on brand and serial no.');
        }
    }
    $scope.removeDevice = function (key) {
        $scope.registered_devices.splice(key, 1);
    }
});
GreetApp.controller( 'TakePictureController', function($scope, $sce) {
    $scope.action = 'take-picture';
    $scope.body_class = 'white';
    $scope.header_text = $sce.trustAsHtml("Hi Jay, this is your first time visit. <br />We need to take a picture for ID requirements.");
    $scope.current_time = '9:51 AM';
    $scope.footer_text = 'ID Processing Requirements';
    $scope.body = 'id processing';
});
GreetApp.controller( 'PrintingController', function($scope, $sce) {
    $scope.action = 'printing';
    $scope.body_class = 'white';
    $scope.header_text = $sce.trustAsHtml('');
    $scope.current_time = '9:51 AM';
    $scope.footer_text = 'We are now printing your ID and device tag';
    $scope.body = 'printing';
});
GreetApp.controller( 'FinishProcessController', function($scope, $sce) {
    $scope.action = 'finish-process';
    $scope.body_class = 'white';
    $scope.header_text = $sce.trustAsHtml("Hi Jay, Please follow the instructions before <br />Entering to security gate.");
    $scope.current_time = '9:51 AM';
    $scope.body = 'finish process';
    $scope.footer_text = ' Security Procedure';
});

GreetApp.config(function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'embedded.home.html',
        controller: 'HomeController'
    }).when('/search-data', {
        templateUrl: 'embedded.search_data.html',
        controller: 'SearchDataController'
    }).when('/invalid-timein-time', {
        templateUrl: 'embedded.invalid_time_in_time.html'
    }).when('/confirm-checkin', {
        templateUrl: 'embedded.confirm_checkin.html',
        controller: 'ConfirmCheckinController'
    }).when('/dangerous-goods', {
        templateUrl: 'embedded.main.html',
        controller: 'DangerousGoodsController'
    }).when('/electronic-device', {
        templateUrl: 'embedded.main.html',
        controller: 'ElectronicDeviceController'
    }).when('/electronic-device-select', {
        templateUrl: 'embedded.main.html',
        controller: 'ElectronicDeviceSelectController'
    }).when('/take-picture', {
        templateUrl: 'embedded.main.html',
        controller: 'TakePictureController'
    }).when('/printing', {
        templateUrl: 'embedded.main.html',
        controller: 'PrintingController'
    }).when('/finish-process', {
        templateUrl: 'embedded.main.html',
        controller: 'FinishProcessController'
    }).otherwise({
        redirectTo: '/home'
    });
});
//
//GreetApp.config(function ($routeProvider) {
//    $routeProvider.when('/home', {
//        templateUrl: 'embedded.home.html',
//        controller: 'HomeController'
//    }).when('/search-data', {
//        templateUrl: 'embedded.search_data.html',
//        controller: 'SearchDataController'
//    }).when('/invalid-timein-time', {
//        templateUrl: 'embedded.invalid_time_in_time.html'
//    }).when('/confirm-checkin', {
//        templateUrl: 'embedded.confirm_checkin.html',
//        controller: 'ConfirmCheckinController'
//    }).when('/dangerous-goods', {
//        templateUrl: 'embedded.dangerous_goods.html',
//        controller: 'DangerousGoodsController'
//    }).when('/electronic-device', {
//        templateUrl: 'embedded.electronic_device.html',
//        controller: 'ElectronicDeviceController'
//    }).when('/electronic-device-select', {
//        templateUrl: 'embedded.electronic_device_select.html',
//        controller: 'ElectronicDeviceController'
//    }).when('/take-picture', {
//        templateUrl: 'embedded.take_picture.html',
//        controller: 'TakePictureController'
//    }).when('/printing', {
//        templateUrl: 'embedded.take_picture.html',
//        controller: 'PrintingController'
//    }).when('/security-procedure', {
//        templateUrl: 'embedded.security_procedure.html',
//        controller: 'FinishProcessController'
//    }).otherwise({
//        redirectTo: '/home'
//    });
//});