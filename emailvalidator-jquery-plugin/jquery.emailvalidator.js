(function($) {
    $.fn.emailvalidator = function email(options) {

    	var i=0;
    	var values= new Array(6);
    	$.each( options, function( key, value ) {
    	  values[i] = value;
    	  i=i+1;
    	});
    	var maxlength = values[3];
    	var minlength = values [4];
        var email = this.val();
        var count = email.length;

        if (count < minlength || count > maxlength ){
     
			var div = values[0];
			var message = "Email should between  "+minlength+"  to "+maxlength+"";

			$(""+div+"").html("<div id=\"diverror1\"></div>");
		    this.css('border-color','green');
			$("#diverror1").html("<br><p id=\"para1\">"+message+"</p>");
			$("#para1").append("<span id=\"glyphiconformessage\"></span>");
			$("#glyphiconformessage").addClass('glyphicon glyphicon-remove');
			$("#glyphiconformessage").css('padding-left','100px');
			$(""+div+"").css('color','green');


        }
        else
        {
        	$("#diverror1").remove();	
        }

	  	if (validateEmail(email)) {
	  		
	  		var div = values[0];
	  		var message = values[1];

	  		$(""+div+"").append("<div id=\"diverror3\"></div>");
	  	    this.css('border-color','green');
	  		$("#diverror3").html("<br><p id=\"para2\">"+message+"</p>");
	  		$("#para2").append("<span id=\"glyphiconformessage\"></span>");
	  		$("#glyphiconformessage").addClass('glyphicon glyphicon-ok');
	  		$("#glyphiconformessage").css('padding-left','100px');
	  		$(""+div+"").css('color','green');
	  	} 
	  	else {
	  		
	  		var div = values[0];
	  		var message = values[2];

	  		$(""+div+"").append("<div id=\"diverror2\"></div>");
	  		this.css('border-color','red');
	  		$("#diverror2").html("<p id=\"para2\">"+message+"</p>");
	  		$("#para2").append("<span id=\"glyphiconformessage\"></span>");
	  		$("#glyphiconformessage").addClass('glyphicon glyphicon-remove');
	  		$("#glyphiconformessage").css('padding-left','100px');
	  		$(""+div+"").css('color','red');
	  	}	
    }
    
    function validateEmail(email) {
      var re = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
      return re.test(email);
    }
}(jQuery));