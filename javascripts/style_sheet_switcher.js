var defaultStyleLink;
var otherStyleLink;

/* reference the id attribute in the link element 
on the page by using getElementByid method  - any element with the id 
attribute value set to default of other*/

defaultStyleLink = document.getElementById("origStyle");
otherStyleLink = document.getElementById("altStyle");

function setActiveStyleSheet(styleId){
	
	var i = 0;
	/* Use a reference ie an array to gather all the link elements on the page*/
	var linkItem; 
	var linkArray;
	/* getElementsByTagName gathers all the link elements and puts them into an array*/
	linkArray = document.getElementsByTagName("link");
		/* 
		use a for loop to iterate all link elements in the array
		we use the lenght method to identify how many elements are in the array
		*/
		
		for( i = 0; i < linkArray.length; i++){
		// assigns each element in the array to the linkItem variable
		linkItem = linkArray[i];
		
			/* 
			1. We want to check the rel attribute to see if style exists. The
			indexOf method will return >= 0 (true) if the value style is found 
			inside rel and return - 1 (false) if it is not found inside the rel attribute 
			
			2. the next part of the condition checks to see if the title attribute exists
			inside the link element
				
			( && requires that both conditions are true )
			*/
			
			if(linkItem.getAttribute("rel").indexOf("style") != -1 && 
			linkItem.getAttribute("title")){
				// disable the link if both conditions are true
				linkItem.disabled = true;
				
				if(linkItem.getAttribute("title") === styleId ) {
					linkItem.disabled = false;
				}
			}	
		}
}

/* 
Our undefined functions will handle the onclick events
when a user clicks a link 

setActiveStyleSheet is passed the value of the id  
assigned to the variable
 */

defaultStyleLink.onclick = function() {
	setActiveStyleSheet( this.id );
}

otherStyleLink.onclick = function(){
	setActiveStyleSheet( this.id ); 
}
