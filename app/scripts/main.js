/*globals $:false */

// use strict:
"use strict";

// checks if user entered a search, if not prompts the user, if yes, stores as a variable for the ajax call
function getKeyword() {
    var keyword = document.getElementById('userSearch').value;
    if (userSearch.value.length < 1) {
        confirm("Please enter a keyword to search");
    } else {
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

	// variable used to append json to the placeholder element
	var searchList = document.getElementById("placeholder");

	// loop to display search results
	for (var i = 0; i < searchResults.query.search.length; i++) {

		// Displays article title
		var h2 = document.createElement("h2");
		h2.innerHTML = searchResults.query.search[i].title;
		searchList.appendChild(h2);
		
		// Displays article snippet
		var p = document.createElement("p");
  		p.innerHTML = searchResults.query.search[i].snippet;
  		searchList.appendChild(p);
		
		// Displays URL to article on Wikipedia
		var url = document.createElement("a");
		url.href = buildWikiURL(searchResults.query.search[i].title);
		url.target = "_blank";
		url.innerHTML = "Read more on Wikipedia";
		searchList.appendChild(url);

		// console logs for testing purposes
			// console.log(searchResults.query.search[i].title);
			// console.log(searchResults.query.search[i].snippet);
			// console.log(buildWikiURL(searchResults.query.search[i].title))
	}
}

// a hack as ajax doesn't return a URL, so this function builds
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
