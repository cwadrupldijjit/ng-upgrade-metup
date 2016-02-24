(function () {
    'use strict';
    angular
        .module('AppThree.core')
        .service('ProfileService', ProfileService);
    ProfileService.$inject = ['$http', '$q'];
    function ProfileService($http, $q) {
        var svc = this;
        svc.getMe = getMe;
        svc.getCurrentProfiles = getCurrentProfiles;
        svc.getProfile = getProfile;
        svc.saveProfile = saveProfile;
        svc.saveInterest = saveInterest;
        svc.deleteInterest = deleteInterest;
        svc.profiles = [];
        function getMe() {
            var deferred = $q.defer();
            $http.get('/api/profiles/me')
                .then(function getCurrentProfilesSuccess(response) {
                deferred.resolve(response.data);
            }, function getCurrentProfilesErr(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function getCurrentProfiles() {
            var deferred = $q.defer();
            $http.get('/api/profiles/current')
                .then(function getCurrentProfilesSuccess(response) {
                svc.profiles = [];
                response.data.forEach(function addToProfiles(data) {
                    svc.profiles.push(data);
                });
                deferred.resolve(response.data);
            }, function getCurrentProfilesErr(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function getProfile(id) {
            var deferred = $q.defer();
            $http.get('/api/profiles/' + id)
                .then(function getProfileSuccess(response) {
                deferred.resolve(response.data);
            }, function getProfileErr(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function saveProfile(profile) {
            var deferred = $q.defer();
            $http.post('/api/profiles/add', profile)
                .then(function addProfileSuccess(response) {
                svc.profiles.push(response.data);
                deferred.resolve(response.data);
            }, function addProfileError(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function saveInterest(interest, profileId, index) {
            var deferred = $q.defer();
            var url = '/api/profiles/' + profileId + '/interests';
            var data = { interest: interest };
            if (index !== 'new') {
                url += '?index=' + index;
            }
            console.log('svc', interest);
            $http.post(url, data)
                .then(function SaveInterestSuccess(response) {
                console.log('interest', response.data.interest);
                deferred.resolve(response.data.interest);
            }, function saveInterestError(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
        function deleteInterest(interest, profileId) {
            var deferred = $q.defer();
            console.log('svc', interest);
            $http.delete('/api/profiles/' + profileId + '/interests?q=' + interest)
                .then(function deleteInterestSuccess(response) {
                console.log('interest', response.data.interest);
                deferred.resolve(response.data.interest);
            }, function deleteInterestError(err) {
                deferred.reject(err);
            });
            return deferred.promise;
        }
    }
})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UudHMiXSwibmFtZXMiOlsiUHJvZmlsZVNlcnZpY2UiLCJQcm9maWxlU2VydmljZS5nZXRNZSIsIlByb2ZpbGVTZXJ2aWNlLmdldE1lLmdldEN1cnJlbnRQcm9maWxlc1N1Y2Nlc3MiLCJQcm9maWxlU2VydmljZS5nZXRNZS5nZXRDdXJyZW50UHJvZmlsZXNFcnIiLCJQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMiLCJQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMuZ2V0Q3VycmVudFByb2ZpbGVzU3VjY2VzcyIsIlByb2ZpbGVTZXJ2aWNlLmdldEN1cnJlbnRQcm9maWxlcy5nZXRDdXJyZW50UHJvZmlsZXNTdWNjZXNzLmFkZFRvUHJvZmlsZXMiLCJQcm9maWxlU2VydmljZS5nZXRDdXJyZW50UHJvZmlsZXMuZ2V0Q3VycmVudFByb2ZpbGVzRXJyIiwiUHJvZmlsZVNlcnZpY2UuZ2V0UHJvZmlsZSIsIlByb2ZpbGVTZXJ2aWNlLmdldFByb2ZpbGUuZ2V0UHJvZmlsZVN1Y2Nlc3MiLCJQcm9maWxlU2VydmljZS5nZXRQcm9maWxlLmdldFByb2ZpbGVFcnIiLCJQcm9maWxlU2VydmljZS5zYXZlUHJvZmlsZSIsIlByb2ZpbGVTZXJ2aWNlLnNhdmVQcm9maWxlLmFkZFByb2ZpbGVTdWNjZXNzIiwiUHJvZmlsZVNlcnZpY2Uuc2F2ZVByb2ZpbGUuYWRkUHJvZmlsZUVycm9yIiwiUHJvZmlsZVNlcnZpY2Uuc2F2ZUludGVyZXN0IiwiUHJvZmlsZVNlcnZpY2Uuc2F2ZUludGVyZXN0LlNhdmVJbnRlcmVzdFN1Y2Nlc3MiLCJQcm9maWxlU2VydmljZS5zYXZlSW50ZXJlc3Quc2F2ZUludGVyZXN0RXJyb3IiLCJQcm9maWxlU2VydmljZS5kZWxldGVJbnRlcmVzdCIsIlByb2ZpbGVTZXJ2aWNlLmRlbGV0ZUludGVyZXN0LmRlbGV0ZUludGVyZXN0U3VjY2VzcyIsIlByb2ZpbGVTZXJ2aWNl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QSxFQUFFRCw2QkFBNkJBLEdBQUdBO2dCQUNsQ0UsUUFBUUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0E7WUFDdEJBLENBQUNBLENBQUNGLENBQUNBO1lBRUpBLE1BQU1BLENBQUNBLFFBQVFBLENBQUNBLE9BQU9BLENBQUNBO1FBQ3pCQSxDQUFDQTtJQUNGakIsQ0FBQ0E7QUFDRixDQUFDLENBQUMsRUFBRSxDQUFDIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9wcm9maWxlLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XHJcblx0J3VzZSBzdHJpY3QnO1xyXG5cdFxyXG5cdGFuZ3VsYXJcclxuXHRcdC5tb2R1bGUoJ0FwcFRocmVlLmNvcmUnKVxyXG5cdFx0LnNlcnZpY2UoJ1Byb2ZpbGVTZXJ2aWNlJywgUHJvZmlsZVNlcnZpY2UpO1xyXG5cdFxyXG5cdFByb2ZpbGVTZXJ2aWNlLiRpbmplY3QgPSBbJyRodHRwJywgJyRxJ107XHJcblx0XHJcblx0ZnVuY3Rpb24gUHJvZmlsZVNlcnZpY2UoJGh0dHAsICRxKSB7XHJcblx0XHR2YXIgc3ZjID0gdGhpcztcclxuXHRcdFxyXG5cdFx0c3ZjLmdldE1lID0gZ2V0TWU7XHJcblx0XHRzdmMuZ2V0Q3VycmVudFByb2ZpbGVzID0gZ2V0Q3VycmVudFByb2ZpbGVzO1xyXG5cdFx0c3ZjLmdldFByb2ZpbGUgPSBnZXRQcm9maWxlO1xyXG5cdFx0c3ZjLnNhdmVQcm9maWxlID0gc2F2ZVByb2ZpbGU7XHJcblx0XHRzdmMuc2F2ZUludGVyZXN0ID0gc2F2ZUludGVyZXN0O1xyXG5cdFx0c3ZjLmRlbGV0ZUludGVyZXN0ID0gZGVsZXRlSW50ZXJlc3Q7XHJcblx0XHRzdmMucHJvZmlsZXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0TWUoKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvbWUnKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9maWxlc1N1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UuZGF0YSk7XHJcblx0XHRcdFx0fSwgZnVuY3Rpb24gZ2V0Q3VycmVudFByb2ZpbGVzRXJyKGVycikge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZ2V0Q3VycmVudFByb2ZpbGVzKCkge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHRcclxuXHRcdFx0JGh0dHAuZ2V0KCcvYXBpL3Byb2ZpbGVzL2N1cnJlbnQnKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldEN1cnJlbnRQcm9maWxlc1N1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHN2Yy5wcm9maWxlcyA9IFtdO1xyXG5cdFx0XHRcdFx0cmVzcG9uc2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIGFkZFRvUHJvZmlsZXMoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRzdmMucHJvZmlsZXMucHVzaChkYXRhKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBnZXRDdXJyZW50UHJvZmlsZXNFcnIoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBnZXRQcm9maWxlKGlkKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5nZXQoJy9hcGkvcHJvZmlsZXMvJyArIGlkKVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGdldFByb2ZpbGVTdWNjZXNzKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGdldFByb2ZpbGVFcnIoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBzYXZlUHJvZmlsZShwcm9maWxlKSB7XHJcblx0XHRcdHZhciBkZWZlcnJlZCA9ICRxLmRlZmVyKCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkaHR0cC5wb3N0KCcvYXBpL3Byb2ZpbGVzL2FkZCcsIHByb2ZpbGUpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gYWRkUHJvZmlsZVN1Y2Nlc3MocmVzcG9uc2UpIHtcclxuXHRcdFx0XHRcdHN2Yy5wcm9maWxlcy5wdXNoKHJlc3BvbnNlLmRhdGEpO1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZS5kYXRhKTtcclxuXHRcdFx0XHR9LCBmdW5jdGlvbiBhZGRQcm9maWxlRXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmdW5jdGlvbiBzYXZlSW50ZXJlc3QoaW50ZXJlc3QsIHByb2ZpbGVJZCwgaW5kZXgpIHtcclxuXHRcdFx0dmFyIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcclxuXHRcdFx0dmFyIHVybCA9ICcvYXBpL3Byb2ZpbGVzLycgKyBwcm9maWxlSWQgKyAnL2ludGVyZXN0cyc7XHJcblx0XHRcdHZhciBkYXRhID0ge2ludGVyZXN0OiBpbnRlcmVzdH07XHJcblx0XHRcdGlmIChpbmRleCAhPT0gJ25ldycpIHtcclxuXHRcdFx0XHR1cmwgKz0gJz9pbmRleD0nICsgaW5kZXg7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc29sZS5sb2coJ3N2YycsIGludGVyZXN0KTtcclxuXHRcdFx0JGh0dHAucG9zdCh1cmwsIGRhdGEpXHJcblx0XHRcdFx0LnRoZW4oZnVuY3Rpb24gU2F2ZUludGVyZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ludGVyZXN0JywgcmVzcG9uc2UuZGF0YS5pbnRlcmVzdCk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEuaW50ZXJlc3QpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIHNhdmVJbnRlcmVzdEVycm9yKGVycikge1xyXG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0KGVycik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZGVsZXRlSW50ZXJlc3QoaW50ZXJlc3QsIHByb2ZpbGVJZCkge1xyXG5cdFx0XHR2YXIgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xyXG5cdFx0XHRjb25zb2xlLmxvZygnc3ZjJywgaW50ZXJlc3QpO1xyXG5cdFx0XHQkaHR0cC5kZWxldGUoJy9hcGkvcHJvZmlsZXMvJyArIHByb2ZpbGVJZCArICcvaW50ZXJlc3RzP3E9JyArIGludGVyZXN0KVxyXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0U3VjY2VzcyhyZXNwb25zZSkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ludGVyZXN0JywgcmVzcG9uc2UuZGF0YS5pbnRlcmVzdCk7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlKHJlc3BvbnNlLmRhdGEuaW50ZXJlc3QpO1xyXG5cdFx0XHRcdH0sIGZ1bmN0aW9uIGRlbGV0ZUludGVyZXN0RXJyb3IoZXJyKSB7XHJcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3QoZXJyKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
