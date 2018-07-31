//bTestAll_OneTestFails_ReturnsFalse.js: Testing logic.

define([
	"bTestAll",
	"Test"
], function(
	bTestAll,
	Test
) {
	return {
		"Name":"bTestAll_OneTestFails_ReturnsFalse",
		"Input": [
			Test({
				"Name": "PassingTest",
				"Input": undefined,
				"Function": function( Inupt ) {
					return true;
				},
				"ExpectedOutput": true
			}),
			Test({
				"Name": "FailingTest",
				"Input": undefined,
				"Function": function( Input ) {
					return false;
				},
				"ExpectedOutput": true
			})
		],
		"Function": bTestAll,
		"ExpectedOutput": false
	};
});
