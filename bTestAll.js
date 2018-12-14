//bTestAll.js: Functional Logic.

define([
	"underscore",
	"log",
	"validate",
	"bTestAll_Validation"
], function(
	_,
	log,
	validate,
	bTestAll_Validation
) {
  return function( Input ) {
	validate({
		"Validation": bTestAll_Validation,
		"Data": Input
	});

	var Result = false;
	try {
		if ( _.isEmpty( Input.TestCollection ) === false ) {
		//if the test collection is not empty then...
			//Run every test.
			Result = _.every( Input.TestCollection, function( Test ) {
				return Test.Run();
			});
		}
	} catch ( Error ) {
		log("Error: " + JSON.stringify( Error ), Input.Debug);
	}
	return Result;
  };
});
