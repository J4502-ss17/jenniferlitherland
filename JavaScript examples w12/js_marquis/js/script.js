var newLink = document.createElement( "a" );

var allParagraphs = document.getElementsByTagName('p');

var firstParagraph = allParagraphs[0];

function revealCopy(e) {
    var allParagraphs = document.getElementsByTagName("p");
    for( var i = 0; i < allParagraphs.length; i++ ) {
        if( i === 0 ) {
            continue;
    }
    allParagraphs[ i ].style.display = "block";
  }
  this.remove();
  e.preventDefault();
}

newLink.setAttribute("href","#");

newLink.innerHTML="Read More";

newLink.setAttribute( "class", "more-link" );

firstParagraph.appendChild( newLink );

newLink.addEventListener( "click", revealCopy );

for( var i = 0; i < allParagraphs.length; i++ ) {
        if( i === 0 ) {
        continue;
      }
    allParagraphs[ i ].style.display = "none";
}


// newLink.style.display = "inline-block"
//
// newLink.style.marginLeft = "0.5em"

//This is a comment
