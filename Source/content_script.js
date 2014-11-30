walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
            if(node.parentElement.tagName.toLowerCase() != "script") {
                handleText(node);
            }
			break;
	}
}

function handleText(textNode) {
	var v = textNode.nodeValue;

  v = v.replace(/\b[s|S][^h]/g, function(match, p1, p2, offset, string) {
    return match[0] + "hh" + match[1];
  });

  v = v.replace(/\b[s|S]h[^h]/g, function(match, p1, p2, offset, string) {
    return match[0] + match[2];
  });

  v = v.replace(/ss+/g, function(match, p1, p2, offset, string) {
    return "s";
  });

 v = v.replace(/thish/g, function(match, p1, p2, offset, string) {
    return "thish... thish";
  });

	textNode.nodeValue = v;
}


