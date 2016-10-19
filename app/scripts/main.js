/*globals $:false */

// use strict:
"use strict";

// checks if user entered a search, if not prompts the user, if yes, stores as a variable for the ajax call
function getKeyword() {
    var keyword = document.getElementById('userSearch').value;
    if (userSearch.value.length < 1) {
        confirm("Please enter a keyword to search");
    } else {
        // return console.log(keyword); // use to test; TODO remove once OK
        return keyword;
    }
}

// function wrapper for the ajax call. Only calls if a keyword 
function doWikiSearch() {
    var keyword = getKeyword();
    if (keyword.length < 1) {
        return;
    } else {
    	// start ajax
        $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: {
                action: "query",
                list: "search",
                srsearch: keyword,
                format: "json",
                prop: "info",
                inprop: "url"
            },
            dataType: "jsonp",
            success: function(searchResults) {
                // console.log(searchResults); 						// use to test; TODO remove once OK
                displaySearch(searchResults);
            },
            xhrFields: {
                withCredentials: false
            }
        });
        // end ajax
    }
}

function displaySearch(searchResults) {
	// var wikiURL = buildWikiURL(searchResults);
	// console.log(searchResults.query.search[0].title);			// use to test; TODO remove once OK

	for (var i = 0; i < searchResults.query.search.length; i++) {
		console.log(searchResults.query.search[i].title); 			// use to test; TODO remove once OK
		console.log(searchResults.query.search[i].snippet);			// use to test; TODO remove once OK
	}
	// buildWikiURL(getKeyword);
}

function buildWikiURL(getKeyword) {
	var keyword = getKeyword();
	keyword = keyword.replace(/ /g,"_");
	// console.log(keyword);										// use to test; TODO remove once OK
	var wikiURL = "https://en.wikipedia.org/wiki/" + keyword;
	// console.log(wikiURL);										// use to test; TODO remove once OK
	return wikiURL;
}
