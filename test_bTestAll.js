//test_bTestAll.js: Testing Logic.

define([
  "TestSuite",
  "log",
  "bTestAll",
  "tests/bTestAll_PassingTest_ReturnsTrue",
  "tests/bTestAll_MultiplePassingTests_ReturnsTrue",
  "tests/bTestAll_FailingTest_ReturnsFalse",
  "tests/bTestAll_OneTestFails_ReturnsFalse",
	"tests/bTestAll_NoArguments_ReturnsFalse"
], function(
  TestSuite,
  log,
  bTestAll,
  bTestAll_PassingTest_ReturnsTrue,
  bTestAll_MultiplePassingTests_ReturnsTrue,
  bTestAll_FailingTest_ReturnsFalse,
  bTestAll_OneTestFails_ReturnsFalse,
	bTestAll_NoArguments_ReturnsFalse
) {
  return TestSuite.extend({
    "initialize": function() {
      log("test_bTestAll initialized successfully!");
      var xTestSuite = this;
      xTestSuite.set( "MethodUnderTest", "bTestAll" );
        xTestSuite.add( bTestAll_PassingTest_ReturnsTrue );
	xTestSuite.add( bTestAll_MultiplePassingTests_ReturnsTrue );
	xTestSuite.add( bTestAll_FailingTest_ReturnsFalse );
	xTestSuite.add( bTestAll_OneTestFails_ReturnsFalse );
	xTestSuite.add( bTestAll_NoArguments_ReturnsFalse );
      xTestSuite.test();
    }
  });
});
