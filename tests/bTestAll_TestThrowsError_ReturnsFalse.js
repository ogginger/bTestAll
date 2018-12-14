//bTestAll_TestThrowsError_ReturnsFalse.js: Testing logic.

define([
	"bTestAll",
	"xGenerateTest"		
], function(
	bTestAll,
	xGenerateTest
) {
	return {
		"Name":"bTestAll_TestThrowsError_ReturnsFalse",
		"Input": {
			"TestCollection": [xGenerateTest({
				"Name": "TestThrowingError",
				"Input": undefined,
				"Function": function() {
					throw { "Message": "Error" };
				},
				"ExpectedOutput": true
			})],
			"Debug": false
		},
		"Function": bTestAll,
		"ExpectedOutput": false,
		"Debug": false
	};
});
