//bTestAll.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	return _.every( Input, function( Test ) {
		return Test.Run();
	});
  };
});
