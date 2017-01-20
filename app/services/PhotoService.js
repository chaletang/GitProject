define(['photo'],function(photo) {
    'use strict';
	var PhotoService = function($resource) {
        var resource = $resource('content/js/data/photos/photos.json', {}, {
        query: {
          method: 'GET',
          //params: {photoId: 'photos'},
          isArray: true
        }
      });
      return resource;
    }
    
    PhotoService.$inject = ['$resource'];
    photo.factory('PhotoService', PhotoService);
 });