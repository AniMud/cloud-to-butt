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
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bStephen Harper\b/g, "Calgary International Airport");
	v = v.replace(/\bStephen harper\b/g, "Calgary International Airport");
	v = v.replace(/\bstephen Harper\b/g, "Calgary International Airport");
	v = v.replace(/\bstephen harper\b/g, "Calgary International Airport");
	v = v.replace(/\bHarper\b/g, "Calgary International Airport");
	v = v.replace(/\bharper\b/g, "Calgary International Airport");
	
	textNode.nodeValue = v;
}


