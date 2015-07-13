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
 	// $.ajax({
  //       type: 'DELETE',
        // data: 
  //           customername: customernameedit,
  //           customerphone: customerphone,
  //           data: quotedata
  //       }, success: function(response) {
  //           $("#Message").html(response);
  //       }
  		// $('#chats').empty()
  		$('#chats').empty();
// document.getElementById(this).reset() 

	// $('body').reset();
    // });

};