(function () {
    'use strict';
    angular
        .module('AppThree.profiles')
        .directive('profiles', ProfilesDirective);
    function ProfilesDirective() {
        return {
            restrict: 'E',
            templateUrl: '/ng-app/profiles/profiles.template.html',
            controller: Profiles,
            controllerAs: 'vm',
            scope: {},
            bindToController: true
        };
    }
    Profiles.$inject = ['$scope', 'ProfileService'];
    function Profiles($scope, ProfileService) {
        var vm = this;
        vm.me;
        vm.availableProfiles;
        vm.isShowing = false;
        vm.toggleProfiles = toggleProfiles;
        getMe();
        getCurrentProfiles();
        function toggleProfiles() {
            vm.isShowing = !vm.isShowing;
        }
        function getMe() {
            ProfileService.getMe()
                .then(function getMeSuccess(response) {
                vm.me = response;
            }, function getMeErr(err) {
                console.warn(err);
            });
        }
        function getCurrentProfiles() {
            ProfileService.getCurrentProfiles()
                .then(function getProfilesSuccess(response) {
                vm.availableProfiles = response;
            }, function getProfilesError(err) {
                console.warn(err);
            });
        }
        $scope.$watch(function watchForProfileChanges() {
            return ProfileService.profiles.length;
        }, function updateProfiles(newVal) {
            vm.availableProfiles = ProfileService.profiles;
        });
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9wcm9maWxlcy9wcm9maWxlcy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOlsiUHJvZmlsZXNEaXJlY3RpdmUiLCJQcm9maWxlcyIsIlByb2ZpbGVzLnRvZ2dsZVByb2ZpbGVzIiwiUHJvZmlsZXMuZ2V0TWUiLCJQcm9maWxlcy5nZXRNZS5nZXRNZVN1Y2Nlc3MiLCJQcm9maWxlcy5nZXRNZS5nZXRNZUVyciIsIlByb2ZpbGVzLmdldEN1cnJlbnRQcm9maWxlcyIsIlByb2ZpbGVzLmdldEN1cnJlbnRQcm9maWxlcy5nZXRQcm9maWxlc1N1Y2Nlc3MiLCJQcm9maWxlcy5nZXRDdXJyZW50UHJvZmlsZXMuZ2V0UHJvZmlsZXNFcnJvciIsIlByb2ZpbGVzLndhdGNoRm9yUHJvZmlsZUNoYW5nZXMiLCJQcm9maWxlcy51cGRhdGVQcm9maWxlcyJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBQztJQUNBLFlBQVksQ0FBQztJQUViLE9BQU87U0FDTCxNQUFNLENBQUMsbUJBQW1CLENBQUM7U0FDM0IsU0FBUyxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBRTNDO1FBQ0NBLE1BQU1BLENBQUNBO1lBQ05BLFFBQVFBLEVBQUVBLEdBQUdBO1lBQ2JBLFdBQVdBLEVBQUVBLHlDQUF5Q0E7WUFDdERBLFVBQVVBLEVBQUVBLFFBQVFBO1lBQ3BCQSxZQUFZQSxFQUFFQSxJQUFJQTtZQUNsQkEsS0FBS0EsRUFBRUEsRUFBRUE7WUFDVEEsZ0JBQWdCQSxFQUFFQSxJQUFJQTtTQUN0QkEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFFRCxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFFaEQsa0JBQWtCLE1BQU0sRUFBRSxjQUFjO1FBQ3ZDQyxJQUFJQSxFQUFFQSxHQUFHQSxJQUFJQSxDQUFDQTtRQUVkQSxFQUFFQSxDQUFDQSxFQUFFQSxDQUFDQTtRQUNOQSxFQUFFQSxDQUFDQSxpQkFBaUJBLENBQUNBO1FBQ3JCQSxFQUFFQSxDQUFDQSxTQUFTQSxHQUFHQSxLQUFLQSxDQUFDQTtRQUNyQkEsRUFBRUEsQ0FBQ0EsY0FBY0EsR0FBR0EsY0FBY0EsQ0FBQ0E7UUFFbkNBLEtBQUtBLEVBQUVBLENBQUNBO1FBQ1JBLGtCQUFrQkEsRUFBRUEsQ0FBQ0E7UUFFckJBO1lBQ0NDLEVBQUVBLENBQUNBLFNBQVNBLEdBQUdBLENBQUNBLEVBQUVBLENBQUNBLFNBQVNBLENBQUNBO1FBQzlCQSxDQUFDQTtRQUVERDtZQUNDRSxjQUFjQSxDQUFDQSxLQUFLQSxFQUFFQTtpQkFDcEJBLElBQUlBLENBQUNBLHNCQUFzQkEsUUFBUUE7Z0JBQ25DQyxFQUFFQSxDQUFDQSxFQUFFQSxHQUFHQSxRQUFRQSxDQUFDQTtZQUNsQkEsQ0FBQ0EsRUFBRUQsa0JBQWtCQSxHQUFHQTtnQkFDdkJFLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLENBQUNBO1lBQ25CQSxDQUFDQSxDQUFDRixDQUFDQTtRQUNMQSxDQUFDQTtRQUVERjtZQUNDSyxjQUFjQSxDQUFDQSxrQkFBa0JBLEVBQUVBO2lCQUNqQ0EsSUFBSUEsQ0FBQ0EsNEJBQTRCQSxRQUFRQTtnQkFDekNDLEVBQUVBLENBQUNBLGlCQUFpQkEsR0FBR0EsUUFBUUEsQ0FBQ0E7WUFDakNBLENBQUNBLEVBQUVELDBCQUEwQkEsR0FBR0E7Z0JBQy9CRSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUNuQkEsQ0FBQ0EsQ0FBQ0YsQ0FBQ0E7UUFDTEEsQ0FBQ0E7UUFFREwsTUFBTUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7WUFDYlEsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0E7UUFDdkNBLENBQUNBLEVBQUVSLHdCQUF3QkEsTUFBTUE7WUFDaENTLEVBQUVBLENBQUNBLGlCQUFpQkEsR0FBR0EsY0FBY0EsQ0FBQ0EsUUFBUUEsQ0FBQ0E7UUFDaERBLENBQUNBLENBQUNULENBQUFBO0lBQ0hBLENBQUNBO0FBQ0YsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsImZpbGUiOiJhcHAvcHJvZmlsZXMvcHJvZmlsZXMuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHRcclxuXHRhbmd1bGFyXHJcblx0XHQubW9kdWxlKCdBcHBUaHJlZS5wcm9maWxlcycpXHJcblx0XHQuZGlyZWN0aXZlKCdwcm9maWxlcycsIFByb2ZpbGVzRGlyZWN0aXZlKTtcclxuXHRcclxuXHRmdW5jdGlvbiBQcm9maWxlc0RpcmVjdGl2ZSgpIHtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHJlc3RyaWN0OiAnRScsXHJcblx0XHRcdHRlbXBsYXRlVXJsOiAnL25nLWFwcC9wcm9maWxlcy9wcm9maWxlcy50ZW1wbGF0ZS5odG1sJyxcclxuXHRcdFx0Y29udHJvbGxlcjogUHJvZmlsZXMsXHJcblx0XHRcdGNvbnRyb2xsZXJBczogJ3ZtJyxcclxuXHRcdFx0c2NvcGU6IHt9LFxyXG5cdFx0XHRiaW5kVG9Db250cm9sbGVyOiB0cnVlXHJcblx0XHR9O1xyXG5cdH1cclxuXHRcclxuXHRQcm9maWxlcy4kaW5qZWN0ID0gWyckc2NvcGUnLCAnUHJvZmlsZVNlcnZpY2UnXTtcclxuXHRcclxuXHRmdW5jdGlvbiBQcm9maWxlcygkc2NvcGUsIFByb2ZpbGVTZXJ2aWNlKSB7XHJcblx0XHR2YXIgdm0gPSB0aGlzO1xyXG5cdFx0XHJcblx0XHR2bS5tZTtcclxuXHRcdHZtLmF2YWlsYWJsZVByb2ZpbGVzO1xyXG5cdFx0dm0uaXNTaG93aW5nID0gZmFsc2U7XHJcblx0XHR2bS50b2dnbGVQcm9maWxlcyA9IHRvZ2dsZVByb2ZpbGVzO1xyXG5cdFx0XHJcblx0XHRnZXRNZSgpO1xyXG5cdFx0Z2V0Q3VycmVudFByb2ZpbGVzKCk7XHJcblx0XHRcclxuXHRcdGZ1bmN0aW9uIHRvZ2dsZVByb2ZpbGVzKCkge1xyXG5cdFx0XHR2bS5pc1Nob3dpbmcgPSAhdm0uaXNTaG93aW5nO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBnZXRNZSgpIHtcclxuXHRcdFx0UHJvZmlsZVNlcnZpY2UuZ2V0TWUoKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldE1lU3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0dm0ubWUgPSByZXNwb25zZTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBnZXRNZUVycihlcnIpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUud2FybihlcnIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBnZXRDdXJyZW50UHJvZmlsZXMoKSB7XHJcblx0XHRcdFByb2ZpbGVTZXJ2aWNlLmdldEN1cnJlbnRQcm9maWxlcygpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gZ2V0UHJvZmlsZXNTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHR2bS5hdmFpbGFibGVQcm9maWxlcyA9IHJlc3BvbnNlO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGdldFByb2ZpbGVzRXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JHNjb3BlLiR3YXRjaChmdW5jdGlvbiB3YXRjaEZvclByb2ZpbGVDaGFuZ2VzKCkge1xyXG5cdFx0XHRyZXR1cm4gUHJvZmlsZVNlcnZpY2UucHJvZmlsZXMubGVuZ3RoO1xyXG5cdFx0fSwgZnVuY3Rpb24gdXBkYXRlUHJvZmlsZXMobmV3VmFsKSB7XHJcblx0XHRcdHZtLmF2YWlsYWJsZVByb2ZpbGVzID0gUHJvZmlsZVNlcnZpY2UucHJvZmlsZXM7XHJcblx0XHR9KVxyXG5cdH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
