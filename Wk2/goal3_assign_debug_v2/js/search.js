// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"),// Get the DOM document element aDiv Id Results.
		searchInput = document.forms[0].search,//  Get the DOM  document form print search form.
		currentSearch = ''
	;
	
	// Validates search query
	var validate = function(query){  //fixed error removed == with =: Typo corrected

        //console.log("Right before while loop");

		// Trim whitespace from start and end of search query
		while(query.charAt(0) === " "){  // error fixed:replaced single = with ===//
			query = query.substring(1, query.length);  //
		};
		while(query.charAt(query.length-1) === "") {  // get length of query search
            query = query.substring(0, query.length - 1);//
        };// fixed error added curly brace.
		
		// Check search length, must have 3 characters
		if(query.length < 3){ //If query is less than three characters run alert.
			alert("Your search query is too small, try again."); //Fixed error added double quotes closed string.

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			return;
		};//ENDIF
		
		search(query);
	};
	
	// Finds search matches
	var search = function(query){  //
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");// query
		
		// array to store matched results from database.js
		var results = []; // results to an array.

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++) {

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var ii = 0, jj = queryArray.length; ii < jj; ii++) {
                var qitem = queryArray[ii].tolowercase();

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem);   //database will compare items  from search query.
                if (compare !== -1) {
                    results.push(db[i]); // data base will then push results.

                };// fixed error added curly brace.

            };// fixed error added curly brace.
        };// fixed error added curly brace.
		
		results.sort();//
		
		// Check that matches were found, and run output functions
		if(results.length = 0){   // IF the results return with no match output function no match.
			noMatch();
		}else{   //ELSE print the results
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'//Error message that displays if
		;
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){            //Function will display result matches with anchors.
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',    //
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
        var query = searchInput.value;
        validate(query);//error fixed: Fixed typo

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };   // fixed error added curly brace.

})();
