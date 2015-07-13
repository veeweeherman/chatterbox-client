// YOUR CODE HERE:
var app = {};
app.init = function() {};
app.send = function(message) {
	$.ajax({
		type: 'POST',
 		data: JSON.stringify(message),
	});
};
app.fetch = function (data) {
	$.ajax({
		type: 'GET',
		data: JSON.stringify(data),
	});
};
app.clearMessages = function() {
  	$('#chats').empty();
};
app.addMessage = function(message) {
	$('#chats').append("<p>"+message.text+"</p>");
	console.log($('#chats'))
}
app.addRoom = function(child) {
	$('#roomSelect').append("<div></div>")
	console.log($('#roomSelect')); //.append(room);
}