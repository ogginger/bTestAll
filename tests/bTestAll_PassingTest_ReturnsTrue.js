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
		"Input": [ 
			Test({
				"Name": "Passing",
				"Input": undefined,
				"Function": function() { return true; },
				"ExpectedOutput": true
			}) 
		],
		"Function": bTestAll,
		"ExpectedOutput": true
	};
});
