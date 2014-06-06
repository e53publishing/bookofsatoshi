$(document).ready(function() {
	var bodyMargin = $('body').css('margin');
	if (bodyMargin === '0px') {
		//console.log('body margin: ' + bodyMargin);
		console.log('BootstrapCDN CSS load Successful');
	} else {
		//console.log('body margin: ' + bodyMargin);
		console.log('BootstrapCDN CSS load Failed; Switching to fallback');
		$("head").append('<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />');
		$("head").append('<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" />');
		$("body").append('<script src="bower_components/bootstrap/dist/js/bootstrap.min.js" />');
	}
});
