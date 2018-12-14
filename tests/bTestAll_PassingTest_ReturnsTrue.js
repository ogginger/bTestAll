//bTestAll_PassingTest_ReturnsTrue.js: Testing logic.

define([
	"bTestAll",
	"Test"
], function(
	bTestAll,
	Test
) {
	return {
		"Name":"bTestAll_PassingTest_ReturnsTrue",
		"Input": { "TestCollection": [
			Test({
				"Name": "PassingTest",
				"Input": undefined,
				"Function": function() {
					return true;
				},
				"ExpectedOutput": true
			})
		]},
		"Function": bTestAll,
		"ExpectedOutput": true,
		"Debug": true
	};
});
