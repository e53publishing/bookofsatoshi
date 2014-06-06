$(document).ready(function() {
	var bodyMargin = $('body').css('margin');
	if (bodyMargin === '0px') {
		//console.log('body margin: ' + bodyMargin);
		console.log('CDN load Successful');
	} else {
		//console.log('body margin: ' + bodyMargin);
		console.log('CDN load Failed; Switching to fallback');
		$("head").append('<link rel="stylesheet" type="text/css" href="bower_components/normalize-css/normalize.css" />');
	}
});
