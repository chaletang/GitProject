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
	                controller: $controllerProvider.register,
	                directive: $compileProvider.directive,
	                component: $compileProvider.component,
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
			componentsDirectory = '/components/', 
			setBaseDirectories = function(viewsDir, controllersDir,componentsDir){
				viewsDirectory = viewsDir;
				controllersDirectory = controllersDir;
				componentsDirectory = componentsDir;
			},
			getViewsDirectory = function(){
				return viewsDirectory;
			},
			getControllersDirectory = function() {
				return controllersDirectory;
			};
			getComponentsDirectory = function() {
				return componentsDirectory;
			};
			return {
				setBaseDirectories: setBaseDirectories,
				getControllersDirectory: getControllersDirectory,
				getViewsDirectory: getViewsDirectory,
				getComponentsDirectory: getComponentsDirectory
			};
		}();
		this.route = function(routeConfig){
			var resolve = function(baseName, path,  role, controllerAs, secure){
				if(!path) {
					path = '';
				}
				if(!controllerAs){
					controllerAs = 'that';
				}
				if(!role){
					role = ['admin','editor','guest'];
				}
				var routeDef = {};
				routeDef.data = {authorizedRoles: role};
				routeDef.templateUrl = routeConfig.getViewsDirectory() + path + baseName + 'View.html';
				routeDef.controller = baseName + 'Controller';
				if (controllerAs) routeDef.controllerAs = controllerAs;
				routeDef.secure = (secure)? secure : false;
				routeDef.resolve = {
					load: ['$q', '$rootScope',function($q,$rootScope) {
							var dependencies = [routeConfig.getControllersDirectory() + path + baseName + 'Controller.js',
							routeConfig.getComponentsDirectory() + path + 'userlist.js'];
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
