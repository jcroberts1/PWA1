/* Job Roberts
28 November 2014
PWA1

 */

 // Create privatized scope using a self-executing function
function query{                                                               //Self executing function Main Function() run

};

	// Variable initialization (DO NOT FIX ANY OF THE BELOW 'Variables')
	var resultsDIV = document.getElementById("results");                 //Result variable is declared
		searchInput = document.forms[0].search;                          //Declare search form
		currentSearch = ('');                                            //The form will be empty until user inputs a search query


	// Validates search query
	var validate=function(query){                                         // Validation variable declared
    };
}

		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){                                    //
			query = query.substring(1, query.length);                    // Start character extraction position (1)

		else(query.charAt(query.length-1) === "")
            {                      //
                query = query.substring(0, query.length - 1);                  //
            }

		// Check search length, must have 3 characters
		if(query.length < 3){                                             //Checks o validate character length
			alert("Your search query is too small, try again.");          // User will be alerted that the length of the search is to small

			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();                                           // Allows user to enter a new search

		}
            return sea                                                     //Will alert user the return of the search from database

		search(query);                                                     //Search initialized to database
	}

	// Finds search matches
	var search = function(query);{                                          // Search variable declared

}

		// split the user's search query string into an array
		var queryArray = query.join(" ");                                   //Get query function

		// array to store matched results from database.js
		var results = [];                                                     //Result variable declared

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){                                   //For loop initialized to loop through Database

			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|');                                   //Data base title has ended.
			var dbitem = db[i].toLowerCase()().substring(0, dbTitleEnd);          //Database variable declared ,index the database

			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){                //Query will determine Character length
				var qitem = queryArray[ii].toLowerCase()();                  // Get query array

				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);                              //Search query will be compared to in the database
				if(compare !== -1){                                               // Compares search throughout the database
					results.push(db[i]);                                           //Print the results from database
				}



		results.sort();                                                             //Invoke result function print results from database

		// Check that matches were found, and run output functions
		if(results.length = 0){                                                     //If result length equal 0 print NO MATCH!!
			noMatch();
		}else{                                                                      // Else if the results have a match print the matches!!
			showMatches(results);                                                   //Prints out the results
		}
	}

	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){                                                         //No match variable declared run function to browser
		//noinspection UnnecessaryLocalVariableJS
        var html = ''+                                                                 //browser variable declared
			<p>No Results found.</p> //If function return no results print paragraph
            //Print message to user
			<p style="font-size:10px;">Try searching for "JavaScript" Just an idea"</p>
		;
		resultsDIV.innerHTML = html; //print results back to browser
	};

	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){ //Run function to show matches

		// THE NEXT 4 LINES ARE CORRECT.
		var html = <p>Results</p>, // Results are returned and print to browser
			title,                 // Print the result title
			url                     //Display result as a link
		;

		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ //Run the result function determine length of word

			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');//Print the title of the result
			title = results[i].subString(0, titleEnd);//After search has been indexed print title of result

			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);//Print result with URL

			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';// Each result will be linked to a URL
		}
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};

	// The on submit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onSubmit = function(){           // FORM declared invoke function
		var query = searchInput.value;                  //Inout form for search input
		validate(query);                               // Query will then be validated through input

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;                     //If incorrect the return will print false


})();   //End program