define(['angular'],function(angular) {
	var routeResolverModule = angular.module('routeResolverModule',[]);
	
	routeResolverModule.service('ControllerChecker', ['$controller', function ($controller) {
	    return {
	        exists: function (controllerName) {
	            if (angular.isFunction(window[controllerName])) {
	                return true; 
	            }
	            try {
	                $controller(controllerName, {}, true);
	                return true;
	            } catch (e) {
	                return false;
	            }
	        }
	    };
	}]);
	
	routeResolverModule.setupRegister = function (module) {
	    module.config([
	        '$controllerProvider',
	        '$compileProvider',
	        '$filterProvider',
	        '$provide',
	        function ($controllerProvider, $compileProvider, $filterProvider, $provide) {
	            module.register = {
	            	directive: $compileProvider.directive,
	                component: $compileProvider.component,
	                controller: $controllerProvider.register,
	                filter: $filterProvider.register,
	                factory: $provide.factory,
	                service: $provide.service,
	                value: $provide.value,
	                constant: $provide.constant
	            };
	        }
	    ]);
	};
	
	var routeResolver = function () {
		this.$get = function(){
			return this;
		}
		this.routeConfig = function() {
			var viewsDirectory = '/views/',
			controllersDirectory = '/controllers/',
			directivesDirectory = '/directives/', 
			setBaseDirectories = function(viewsDir, controllersDir,directivesDir){
				viewsDirectory = viewsDir;
				controllersDirectory = controllersDir;
				directivesDirectory = directivesDir;
			},
			getViewsDirectory = function(){
				return viewsDirectory;
			},
			getControllersDirectory = function() {
				return controllersDirectory;
			};
			getDirectivesDirectory = function() {
				return directivesDirectory;
			};
			return {
				setBaseDirectories: setBaseDirectories,
				getControllersDirectory: getControllersDirectory,
				getViewsDirectory: getViewsDirectory,
				getDirectivesDirectory: getDirectivesDirectory
			};
		}();
		this.route = function(routeConfig){
			var resolve = function(baseName, path, page, role, controllerAs, secure){
				if(!path) {
					path = '';
				}
				if(!controllerAs){
					controllerAs = 'that';
				}
				if(!role){
					role = ['admin','editor','guest'];
				}
				if(angular.isUndefined(page)){
					page = !page;
				}
				
				var routeDef = {};
				routeDef.data = {authorizedRoles: role, pageType: page};
				routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + 'View.html';
				routeDef.controller = baseName + 'Controller';
				if (controllerAs) routeDef.controllerAs = controllerAs;
				routeDef.secure = (secure)? secure : false;
				routeDef.resolve = {
					load: ['$http', '$q', '$rootScope',function($http,$q,$rootScope) {
						var controller = routeConfig.getControllersDirectory() + path + baseName + 'Controller.js';
						var directive = routeConfig.getDirectivesDirectory() + path + baseName + '.js';
						var dependencies;
						if(page){
							dependencies = [controller];
						}
						else {
							dependencies = [directive];
						}
						return resolveDependencies($q, $rootScope, dependencies);
						
					}]
				};
				return routeDef;	
			},
			resolveDependencies = function($q, $rootScope, dependencies) {
				var defer = $q.defer();
				require(dependencies,function(){
					defer.resolve();
					$rootScope.$apply();
				});
				return defer.promise;
			};
			return {
				resolve: resolve
			};
		}(this.routeConfig); 
	};
	
	routeResolverModule.provider('routeResolver', routeResolver);
		
});
