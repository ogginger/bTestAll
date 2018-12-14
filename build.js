//build.js: Configuration file for optimizing the bTestAll function. 
/*
	The lib folder contains the Test constructor for testing but is not needed in the actual build.
*/ 
({
    paths: {
	"underscore": "lib/underscore.min",
	"log":"lib/log.min",
	"validate": "lib/validate.min"
    },
    exclude: [ "underscore", "log", "validate" ],
    name: "bTestAll",
    out: "test_all.min.js"
})
