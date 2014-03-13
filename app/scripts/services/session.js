'use strict';

angular.module('angularBusinessMetricsApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
