$(document).ready( function() {
	
	//$('#emailReq').hide();

	$('#form').submit( function() {
		if( !isEmail( this.email.value ) ) {
			$('#email').css('background-color','#f7bebe');
			$('#emailTip').toggle(1000);
			$('#emailReq').hide();			
			return false;
		}
	});
});

$(document).ready( function() {
 	
 	$('#emailReq').show();
 	$('#emailTip').hide();
 	
 	if($('#email').blur){
 		$('#email').blur( function() {
 		$('#email').css('background-color','#fff');
		$('#emailTip').hide();		
 		});
 	}
 	 if($('#email').focus){
  		$('#email').focus( function() {
 		$('#email').css('background-color','#DBFFFF'); 
  		});
 	}
});


function isEmail(string){
	
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; 

	if (emailPattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}


 $(document).ready( function() {
	
	//$('#fnameReq').hide();

	$('#form').submit( function() {
		if( !isFname( this.firstName.value ) ) {
			$('#firstName').css('background-color','#f7bebe');
			$('#fnameTip').toggle(1000);
			$('#fnameReq').hide();			
			return false;
		}
	});
});

$(document).ready( function() {
 	
 	$('#fnameReq').show();
 	$('#fnameTip').hide();
 	
 	if($('#firstName').blur){
 		$('#firstName').blur( function() {
 		$('#firstName').css('background-color','#fff');
		$('#fnameTip').hide();		
 		});
 	}
 	 if($('#firstName').focus){
  		$('#firstName').focus( function() {
 		$('#firstName').css('background-color','#DBFFFF'); 
  		});
 	}
});

function isFname(string)
{
	
	var fnamePattern = /^[a-zA-Z]{2,20}$/; 

	if (fnamePattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}


$(document).ready( function() {
	
	//$('#lnameReq').hide();

	$('#form').submit( function() {
		if( !isLname( this.lastName.value ) ) {
			$('#lastName').css('background-color','#f7bebe');
			$('#lnameTip').toggle(1000);
			$('#lnameReq').hide();			
			return false;
		}
	});
});

$(document).ready( function() {
 	
 	$('#lnameReq').show();
 	$('#lnameTip').hide();
 	
 	if($('#lastName').blur){
 		$('#lastName').blur( function() {
 		$('#lastName').css('background-color','#fff');
		$('#lastTip').hide();		
 		});
 	}
 	 if($('#lastName').focus){
  		$('#lastName').focus( function() {
 		$('#lastName').css('background-color','#DBFFFF'); 
  		});
 	}
});


function isLname(string){
	
	var lnamePattern = /^[a-zA-Z]{2,20}$/; 

	if (lnamePattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}


$(document).ready( function() {
	
	//$('#phoneReq').hide();

	$('#form').submit( function() {
		if( !isPhone( this.phone.value ) ) {
			$('#phone').css('background-color','#f7bebe');
			$('#phoneTip').toggle(1000);
			$('#phoneReq').hide();			
			return false;
		}
	});
});

$(document).ready( function() {
 	
 	$('#phoneReq').show();
 	$('#phoneTip').hide();
 	
 	if($('#phone').blur){
 		$('#phone').blur( function() {
 		$('#phone').css('background-color','#fff');
		$('#phoneTip').hide();		
 		});
 	}
 	 if($('#phone').focus){
  		$('#phone').focus( function() {
 		$('#phone').css('background-color','#DBFFFF'); 
  		});
 	}
});


function isPhone(string) {

	var phonePattern = /^[\d () -]{6,13}$/; 

	if (phonePattern.test(string))
	{
		return true;
	}
	else 
	{
		return false; // Stops form details from being submitted
	}
}