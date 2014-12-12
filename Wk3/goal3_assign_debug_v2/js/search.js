
//Job Roberts
//Date:29Nov2014
//Class: PWA1
//Assignment: ANALYZE Buggy Search v1

// Create privatized scope using a self-executing function
(function() {
    console.log("Let's go find some JavaScript");

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDIV = document.getElementById("results"),
        searchInput = document.forms[0].search;
        currentSearch = '';

    // Validates search query
    var isValid = function (query) {
        console.log("Validate");
        var valid = true;

        // Trim whitespace from start and end of search query


        // Check search length, must have 3 characters
        if (query.length < 3) {
            alert("Your search query is too small, try again.");
            searchInput.focus();
            valid = false
        }

        console.log("validate end");
        return valid;
    }

    // Finds search matches
    var search = function (query) {
        console.log("Search Function");




        // split the user's search query string into an array
         queryArray = query.split(" ");
        console.log(queryArray);

        // array to store matched results from database.js
        var results = [];

        // loop through each index of db array
        for (i = 0, dbLen = db.length; i < dbLen; i++) {
            console.log(i);
            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|');
            console.log('db[i]: ' + db[i]);
            console.log('dbTitleEnd: ' + dbTitleEnd);
            var dbItems = db[i].toLowerCase().substring(0, dbTitleEnd);//fixed camel case toLowerCase!!
            console.log(dbItems);

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for (var j = 0, qLen = queryArray.length; j < qLen; j++) {
                var qItem = queryArray[j].toLowerCase();//fixed error camel case toLowerCase!!
                console.log('query ' + qItem);

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbItems.indexOf(qItem);
                if (compare !== -1) {
                    results.push(db[i]);
                } else {
                    console.log('No match found');
                }
            }
        }

        results.sort();
        console.log('results');
        console.log(results);

        // Check that matches were found, and run output functions
        if (results.length === 0) {
            noMatch();
        } else {
            showMatches(results);
        }
    };

    // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
    var noMatch = function() {
        var html = '' +
                '<p>No Results found.</p>' +
                '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
            ;
        resultsDIV.innerHTML = html;
    };

    // Put matches into page as paragraphs with anchors
    var showMatches = function (results) {
        // THE NEXT 4 LINES ARE CORRECT.
        var html = '<p>Results</p>',
            title,
            url
        ;

        // loop through all the results search() function
        for (var i = 0, j = results.length; i < j; i++) {
            // title of video ends with pipe
            // pull the title's string using index numbers
            console.log(results[i]);
            titleEnd = results[i].indexOf('|');
            title = results[i].substring(0, titleEnd);

            // pull the video url after the title
            url = results[i].substring(results[i].indexOf('|') + 1, results[i].length);

            // make the video link - THE NEXT LINE IS CORRECT.
            html += '<p><a href=' + url + '>' + title + '</a></p>';

            resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
        }

    };

    console.log("Begin Search");

        // The onsubmit event will be reviewed in upcoming Course Material.
        // THE LINE DIRECTLY BELOW IS CORRECT
    document.forms[0].onsubmit = function(){
        console.log('Submit');

        var query = searchInput.value.trim();
        //query = 'bug';
        console.log('query search: \'' + query + '\'');

        if (isValid(query))
            search(query);

        // show results or no match messages

        // return false is needed for most events - this will be reviewed in upcoming course material

        // THE LINE DIRECTLY BELOW IS CORRECT
        return false;
    };
})();