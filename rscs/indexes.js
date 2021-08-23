// Following parameters taken from page
//	var thisMonth = "mm";  1-12
//	var thisYear = "yyyy";
//	var thisDate = "dd";

function showIndices()
	{
	
	var theLets = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z" ]

	var i = 0;

	var theIndex = "";	// the html string we're constructing
	
	var cr='<br\>';		// shortcut string for carriage return
	
	for (i=0; i<26; i++)
		{
		
		if ( theLets[i] == thisIndex ) {
			theIndex += '\<span class="today"\>-&nbsp;' + theLets[i] + '&nbsp;-\</span\>' + cr;
			}
		
		else theIndex+='\<a href="' + theLets[i] + '.html"\>' + theLets[i] +'\</a\>' + cr;
			
		}
		
		document.getElementById('datelink').innerHTML=theIndex;
	}		


// thisMonth is 0 thru 11 so this tests the following month as we use 1-12
// and returns the number of days in the previous month