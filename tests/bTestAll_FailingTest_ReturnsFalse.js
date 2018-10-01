//bTestAll_FailingTest_ReturnsFalse.js: Testing logic.

define([
	"bTestAll",
	"xGenerateTest"
], function(
	bTestAll,
	xGenerateTest
) {
	return {
		"Name":"bTestAll_FailingTest_ReturnsFalse",
		"Input": [
			xGenerateTest({
				"Name": "FailingTest",
				"Input": undefined,
				"Function": function() {
					return false;
				},
				"ExpectedOutput": true
			})
		],
		"Function": bTestAll,
		"ExpectedOutput": false
	};
});
