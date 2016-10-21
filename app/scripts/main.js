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

// takes the search results from the ajax call and
// loops through to build and display the search results
function displaySearch(searchResults) {

	// call the function to hide / show divs here
	changeDisplay();

	// loop to display search results
	for (var i = 0; i < searchResults.query.search.length; i++) {
		console.log(searchResults.query.search[i].title); 			// use to test; TODO remove once OK
		console.log(searchResults.query.search[i].snippet);			// use to test; TODO remove once OK
		console.log(buildWikiURL(searchResults.query.search[i].title));
		// TODO add url to go back to the main search screen
	}
}

// a hack as AJAX doesn't return a URL, so this function builds
// a URL based on the wiki article title returned by the ajax call
function buildWikiURL(searchTitle) {
	var articleTitle = searchTitle;
	articleTitle = articleTitle.replace(/ /g,"_");
	var wikiURL = "https://en.wikipedia.org/wiki/" + articleTitle;
	return wikiURL;
}

// once a search is made by the user, this function hides the search
// and displays the results instead
function changeDisplay() {
	document.getElementById("search").style.visibility = "hidden";
	document.getElementById("display-results").style.display = "block";
}
