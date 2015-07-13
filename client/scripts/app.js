// YOUR CODE HERE:
var app = {};
app.init = function() {};
app.send = function(URL, data, callback) {
	$.POST(URL,data,callback);
};