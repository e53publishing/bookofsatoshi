// Immediately-invoked function expression
// https://github.com/myhonor16/webnext/wiki/IIFE
// Best used with a minifier

(function(window, document, console){
	// Run on Execution
	console.log('WebNext: IIFE Wrapper Started');

	// Run on window.onload
	window.onload = function () {
		console.log('WebNext: Page Loaded');

		// Selects text on hover
		function selectText(element) {
			// var doc = document,
			var text = document.getElementById(element),
			range, selection;
			if (document.body.createTextRange) {
				range = document.body.createTextRange();
				range.moveToElementText(text);
				range.select();
			} else if (window.getSelection) {
				selection = window.getSelection();
				range = document.createRange();
				range.selectNodeContents(text);
				selection.removeAllRanges();
				selection.addRange(range);
			}
		}

		// $('#bos-email').mouseover(function() {
		// 	selectText('bos-email');
		// });

		document.getElementById('bos-email').addEventListener('mouseover', function() {
			selectText('bos-email');
		});
	};

	// Your code here
	// var foo = 'bar';
	// window.foo = foo;

})(window, document, console);
