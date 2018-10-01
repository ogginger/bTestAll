//bTestAll.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return function( Input ) {
	var Result = false;
	if ( Input !== undefined ) {
		Result = _.every( Input, function( Test ) {
			return Test.Run();
		});
	}
	return Result;
  };
});
