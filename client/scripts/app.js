// YOUR CODE HERE:
var app = {};
app.init = function() {};
app.send = function(message) {
	

	$.ajax({
	  // This is the url you should use to communicate with the parse API server.
	  // url: URL,
	  type: 'POST',
	  // data: data;
	 	data: JSON.stringify(message),
	  // contentType: 'application/json',
	  // success: function (data) {
    	
	  // 	callback(data);
   //  	console.log(message);
  	// 	// return data;
  	// 	},
	  // error: function (data) {
	  //   // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
	  //   console.error('chatterbox: Failed to send message');
	  // }
	});


};

// JSON.parse(ajaxOptions.data)