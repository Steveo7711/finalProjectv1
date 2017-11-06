
//set up the arrays for the cheat sheets
/*var CHEATSHEETS = [
  ["Linux", "/cheatsheets/linuxCommands.png"],
  ["Windows", "/cheatsheets/windowIntro.jpg"],
  ["C++", "/cheatsheets/CPlusPlus.jpg"],
  ["C#", "/cheatsheets/CSharp.png"],
  ["Linux", "/cheatsheets/linuxCmds.jpg"]
];
*/
var LinuxCS = new Array();
Messages[0] = "/cheatsheets/linuxCommands.png";
Messages[1] = "/cheatsheets/linuxCmds.jpg";

var CSharpCS = new Array();
Messages[0] = "/cheatsheets/CSharp.png";

var CPlusPlusCS = new Array();
Messages[0] = "/cheatsheets/CPlusPlus.jpg";

var WindowsCS = new Array();
Messages[0] = "/cheatsheets/windowIntro.jpg";

Search (var search) {
//assign the search varible
var x = search;
//make varible for results function
var a = "";

switch (x) {
  case (x.search("Linux") > 0):
    //bring up the linux cheatsheets
    return results(LinuxCS[]);
    break;
  case (x.search("C#") > 0):
    //bring up the C# cheatsheets
    return results(CSharpCS[]);
    break;
  case (x.search("C++") > 0):
    //bring up the C++ cheatsheets
    return results(CPlusPlusCS[]);
    break;
  case (x.search("Windows") > 0):
    //bring up the Windows cheatsheets
    return results(WindowsCS[]);
    break;
  default:
    return document.write("Sorry mate that /n" +
    "isnt in our Database currently.");
  }

}

results (a[]) {
  // write loop that will print out
  // all the cheat sheets from the Array
  var result;
  for( var v = 0, len = a[].length; v < len; v++ ) {
          document.write("<li><img src='"a[v]"' alt='did not load'></li>");
  }
}
