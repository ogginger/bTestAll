//bTestAll_FailingTest_ReturnsFalse.js: Testing logic.

define([
	"bTestAll",
	"Test"
], function(
	bTestAll,
	Test
) {
	return {
		"Name":"bTestAll_FailingTest_ReturnsFalse",
		"Input": [ Test({
			"Name": "FailingTest",
			"Input": undefined,
			"Function": function( Input ) {
				return false;
			},
			"ExpectedOutput": true
		}) ],
		"Function": bTestAll,
		"ExpectedOutput": false
	};
});
