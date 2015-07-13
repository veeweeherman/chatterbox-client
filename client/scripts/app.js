// YOUR CODE HERE:
var app = {};
app.init = function() {};
app.send = function(message) {
	$.ajax({
		type: 'POST',
 		data: JSON.stringify(message),
	});
};
app.fetch = function () {};