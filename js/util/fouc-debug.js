$(document).ready(function() {
	//debugging
	console.log('.fouc-loading padding | ' + $('.fouc-loading').css('padding'));
	console.log('.fouc-loading display | ' + $('.fouc-loading').css('display'));

	$('.fouc-loading').css('padding', '0');
	$('.fouc-loading').css('display', 'none');

	//debugging
	console.log('.fouc-loading padding | ' + $('.fouc-loading').css('padding'));
	console.log('.fouc-loading display | ' + $('.fouc-loading').css('display'));

	//debugging
	console.log('.fouc-content display | ' + $('.fouc-content').css('display'));

	$('.fouc-content').css('display', 'block');

	//debugging
	console.log('.fouc-content display | ' + $('.fouc-content').css('display'));

	console.log('FOUC Script Successful');
});
