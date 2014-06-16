function normalizeLoader(pagePath) {
	$(document).ready(function() {
		var bodyMargin = $('body').css('margin');
		if (bodyMargin === '0px') {
			//console.log('body margin: ' + bodyMargin);
			console.log('normalize.css CDN load Successful');
		} else {
			//console.log('body margin: ' + bodyMargin);
			//console.log('Function Arg: ' + typeof(pagePath));
			console.log('normalize.css CDN load Failed; Switching to fallback');
			if (typeof(pagePath) === "string") {
				$("head").append('<link rel="stylesheet" type="text/css" href="' + pagePath + 'bower_components/normalize-css/normalize.css" />');
			} else {
				$("head").append('<link rel="stylesheet" type="text/css" href="bower_components/normalize-css/normalize.css" />');
			}
		}
	});
}
