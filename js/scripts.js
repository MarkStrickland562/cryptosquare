var encrypt = function(message) {
  var alpha = message.match(/[A-Za-z]/g);
  var columns = Math.floor(Math.sqrt(alpha.length));
  var rows = columns;
  if(alpha.length % (columns * columns) > 0){
    rows += 1;
  }
  var encoded = [];
  var n = 0;
  for(var i = 0; i < columns; i+=1){
    for(var j = 0; j < rows; j+=1){
      if(((j * columns) + i) < alpha.length){
        encoded[n] = alpha[(j * columns) + i];
        n += 1;
      }
    }
  }
  var result = "";
  for(var i = 0; i < encoded.length; i+=1){
    if(i > 0 && (i + 1) % 5 === 0 ){
      result += encoded[i] + " ";
    }
    else{
      result += encoded[i];
    }
  }
  alert(encoded);
  return result;
}

$(document).ready(function() {
  $("form#encryption").submit(function(event) {
    event.preventDefault();

    var message = $("input#message").val();
    var result = encrypt(message);
    $("#result").text(result);
	});
});
