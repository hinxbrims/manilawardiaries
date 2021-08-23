// Following parameters taken from page
//	var thisMonth = "mm";  1-12
//	var thisYear = "yyyy";
//	var thisDate = "dd";

function showLinks()
	{

var theDate = "";					// holds string 'yymmdd'
var theYear = thisYear - 1900;		// holds string 'yy'

var noDays = getDates();

	var i = 0;

	var theLinks = "";				// the html string we're constructing

	for (i = 1; i <= noDays; i++)
		{
		theDate = theYear + thisMonth;		// concat yy and mm
		if (i < 10) { theDate+="0" }		// add leading zero
		theDate += i;							// concat yymm and dd
		
		if (i == thisDate)
			{
			theLinks+='\<span class="today"\>-&nbsp;' + i + '&nbsp;-\</span\>';
			}
		
		// multiple entries
		
		else if ( (i == 6) || (i == 7) || (i == 8)  || (i == 9) || (i == 8 ) || (i == 9) || (i == 13) || (i == 20) || (i == 23)  || (i == 26) )
			{
			theLinks+='\<span class="noentry"\>&nbsp;' + i + '&nbsp;\</span\>';
			}
		
		// no entries
		
		else if ( (i == 2) || (i == 3) || (i == 4) || (i == 5) || (i == 11) || (i == 12) || (i == 15) || (i == 16) || (i == 17) || (i == 18) || (i == 19) || (i == 21) || (i == 22) || (i == 24) || (i == 27) || (i == 28) || (i == 29) || (i == 30) || (i == 31) )
			{
			theLinks+='\<span class="noentry"\>&nbsp;  -&nbsp;&nbsp;\</span\>';
			}
		
		else
			{
			theLinks+='\<a href="' + theDate + '.html"\>&nbsp;' + i +'&nbsp;\</a\>';
			}
		 	
		 	
		 theLinks+='\<br\>';
		}
		document.getElementById('datelink').innerHTML=theLinks;

	}		


function getDates()
{
	var noDays = new Date(thisYear, thisMonth, 0);
				// thisMonth is 0 thru 11 so this tests
				//   the following month as we use 1-12
return(noDays.getDate());	// the number of days in the month
}


document.onkeydown = function(evt)
	{
          evt = evt || window.event;
          switch (evt.keyCode)
          {
            case 37:
              document.getElementById("prevPage").click();
              break;
            case 39:
              document.getElementById("nextPage").click();
              break;
          }
        }  

