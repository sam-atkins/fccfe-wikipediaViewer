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
    // TODO: needs a control to check if the keyword is valid, if < 0 return; if > 1, start ajax call
    // start ajax
    if (keyword.length < 1) {
        return;
    } else {
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
            success: function(data) {
                var search = data;
                console.log(search); // use to test; TODO remove once OK
                // return search;
            },
            xhrFields: {
                withCredentials: false
            }
        });
        // end ajax
    }
}
