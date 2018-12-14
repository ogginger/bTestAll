//bTestAll_NoArguments_ReturnsFalse.js: Testing logic.

define([
	"bTestAll"
], function(
	bTestAll
) {
	return {
		"Name":"bTestAll_NoArguments_ReturnsFalse",
		"Input": undefined,
		"Function": function() {
			var bResult = false;
			try {
				bTestAll();
			} catch( Error ) {
				if ( Error.Message === "Error: No argument was given!" ) {
					bResult = true;
				}
			} finally {
				return bResult;
			}
		},
		"ExpectedOutput": true
	};
});
