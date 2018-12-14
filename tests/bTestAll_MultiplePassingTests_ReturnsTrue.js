//bTestAll_MultiplePassingTests_ReturnsTrue.js: Testing logic.

define([
	"bTestAll",
	"xGenerateTest"
], function(
	bTestAll,
	xGenerateTest
) {
	return {
		"Name":"bTestAll_MultiplePassingTests_ReturnsTrue",
		"Input": { "TestCollection": [
			xGenerateTest({
				"Name":"FirstPassing",
				"Input": undefined,
				"Function": function( Input ) {
					return true;
				},
				"ExpectedOutput": true
			}),
			xGenerateTest({
				"Name": "SecondPassing",
				"Input": undefined,
				"Function": function( Input ) {
					return true;
				},
				"ExpectedOutput": true
			})
		]},
		"Function": bTestAll,
		"ExpectedOutput": true
	};
});
