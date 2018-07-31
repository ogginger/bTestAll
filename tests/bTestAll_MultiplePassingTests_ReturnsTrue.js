//bTestAll_MultiplePassingTests_ReturnsTrue.js: Testing logic.

define([
	"bTestAll",
	"Test"
], function(
	bTestAll,
	Test
) {
	return {
		"Name":"bTestAll_MultiplePassingTests_ReturnsTrue",
		"Input": [
			Test({
				"Name":"FirstPassing",
				"Input": undefined,
				"Function": function( Input ) {
					return true;
				},
				"ExpectedOutput": true
			}),
			Test({
				"Name": "SecondPassing",
				"Input": undefined,
				"Function": function( Input ) {
					return true;
				},
				"ExpectedOutput": true
			})
		],
		"Function": bTestAll,
		"ExpectedOutput": true
	};
});
