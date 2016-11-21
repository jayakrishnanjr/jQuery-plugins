(function($) {
    $.fn.alertHello = function() {
    	alert("hello");
    }
    $.fn.customgreenify = function() {
    	this.css( "color", "green" );
    }
}(jQuery));