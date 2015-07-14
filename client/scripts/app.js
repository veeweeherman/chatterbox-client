// YOUR CODE HERE:
var app = {};
app.init = function() {};
app.send = function(message) {
	$.ajax({
		type: 'POST',
 		url: 'https://api.parse.com/1/classes/chatterbox',
 		data: JSON.stringify(message)
	});
};

app.fetch = function () {
	$.ajax({
		type: 'GET',
		url: 'https://api.parse.com/1/classes/chatterbox',
		data: JSON.stringify(data)
	});
};

app.clearMessages = function() {
  	$('#chats').empty();
};

app.addMessage = function(message) {
	$('#chats').append("<p>"+message.text+"</p>");
	// console.log($('#chats'))
}

app.addRoom = function(child) {
	$('#roomSelect').append("<div></div>")
	// console.log($('#roomSelect')); //.append(room);
}

app.addFriend = function(){
	// app.init();

	$('.username').on('click', function(){
		// $('#chats').append();
			$('#main').append("<p class='username'>"+message.username+"</p>")
	});

	// console.log($('#main'));
}
app.fetch();



console.log($('#main'));