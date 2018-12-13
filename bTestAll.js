//bTestAll.js: Functional Logic.

define([
	"underscore",
	"log"
], function(
	_,
	log
) {
  return function( Input ) {
	var Result = false;
	try {
		if ( _.isEmpty( Input ) === false ) {
		//if the test collection is not empty then...
			//Run every test.
			Result = _.every( Input, function( Test ) {
				return Test.Run();
			});
		}
	} catch ( Error ) {
		log("Error: " + JSON.stringify( Error ));
	}
	return Result;
  };
});
