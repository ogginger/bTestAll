//bTestAll_Validation.js: Functional Logic.

define([
	"underscore"
], function(
	_
) {
  return [
	function( Input ) {
		if ( Input === undefined ) {
			throw { "Message": "Error: No argument was given!" };
		} else {
			return true;
		}
	}
  ];
});
