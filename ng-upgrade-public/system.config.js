(function(global) {
	'use strict';
	
	var map = {
		'app': '/ng-upgrade-app',
		'@angular': '/node_modules/@angular',
		'angular2-in-memory-web-api': '/node_modules/angular2-in-memory-web-api',
		'rxjs': '/node_modules/rxjs',
		'symbol-observable': '/node_modules/symbol-observable'
	};
	
	var packages = {
		'app': { main: 'boot.js', defaultExtension: 'js'},
		'angular2-in-memory-web-api':  {main: 'index.js', defaultExtension: 'js'},
		'rxjs': {defaultExtension: 'js'},
		'symbol-observable': {defaultExtension: 'js', main: 'index.js'}
	};
	
	var ngPackageNames = [
		'common',
		'compiler',
		'core',
		'forms',
		'http',
		'platform-browser',
		'platform-browser-dynamic',
		'router',
		'upgrade'
	];
	
	function packIndex(pkgName) {
		packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
	}
	
	function packUmd(pkgName) {
		packages['@angular/'+pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
	}
	
	var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
	
	ngPackageNames.forEach(setPackageConfig);
	
	var config = {
		map: map,
		packages: packages
	};
	
	System.config(config);
})(this);
