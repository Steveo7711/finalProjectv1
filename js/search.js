$(function() {
  var searchStrg = getUrlParameter("searchStrg");
  console.log("respond to search string: " + searchStrg);

  // This notation is called JSON.  Java Script Object Notation
  // It is the native way that JavaScript can literally declare an object structure.
  // here we are literally building an object with the described structure.
  // {} is an object
  // [] is an array
  var linuxCheatsheets = {
    keyword: "Linux",
    cheetsheets: [
      {
        title: "Linux Commands 1",
        link: "cheatsheets/linuxCmds.jpg"
      },
      {
        title: "Linux Commands 2",
        link: "cheatsheets/linuxCmds.jpg"
      }
    ]
  }

  var windowsCheatsheets = {
    keyword: "Windows",
    cheetsheets: [
      {
        title: "Windows Intro",
        link: "cheatsheets/windowsIntro.jpg"
      }
    ]
  }

  // we want a map of keywords -> array of cheatsheets
  var cheetsheets = [ linuxCheatsheets, windowsCheatsheets ]

  // now we are ready to get the correct cheatsheets for the search

  // javascript has a map function for arrays.
  cheetsheets.map(function(item) {
    // but includes() returns true for "", so a blank search will return everything
    if (item.keyword.includes(searchStrg)) {
      console.log("found matching cheatsheets :" + item.keyword)
    } else {
      console.log("keyword does not match " + searchStrg);
    }
  })

})

function createCheatsheetLi(linkToCheatsheet, title) {
  // let's define html for a cheatsheet
  // "<li><img src='"a[v]"' alt='did not load'></li>"

  var li = $("<li></li>");
  var img = $("<img></img>")
    .attr("src", linkToCheatsheet)
    .attr("alt", title)

  li.append(img);  // insert the image into the li
  return li;
}

// don't write code that executes automatically...
// except for adding event listeners.
// and declaring functions

// found this function on the internet
function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');

      if (sParameterName[0] === sParam) {
          return sParameterName[1] === undefined ? true : sParameterName[1];
      }
  }
}
