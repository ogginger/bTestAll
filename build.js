//build.js: Configuration file for optimizing the bTestAll function. 
/*
	The lib folder contains the Test constructor for testing but is not needed in the actual build.
*/ 
({
    paths: {
	"underscore": "lib/underscore.min"
    },
    exclude: [ "underscore" ],
    name: "bTestAll",
    out: "test_all.min.js"
})
