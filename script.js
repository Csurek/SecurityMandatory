var encrBtn = $("#encr");
var decrBtn = $("#decr");
$('input').keyup(function() {
  //Turns string to int
  var k = parseInt($('#skey').val());
  //Key can be between 0 and 26
  if (!(k >= 0 && k < 26)) {
    $('#err').html('Enter a key between 0 and 25!');
    return;
  }
  //Converting the message to lower case
  var message = $('#text').val().toLowerCase();
  var secret = '';
  var secrets = '';
  var abc = 'abcdefghijklmnopqrstuvwxyz';
  //Loop goes through the whole message char by char
  for (var j = 0; j < message.length; j++) {
    var index = abc.indexOf(message.charAt(j));
    if (index >= 0) {
      //Shifts the character by the key, then adds it to the secret variable
      secret += abc.charAt((index + k) % 26);
    } else {
      secret += message.charAt(j);
    }
  }
  //For decryption
 for (var j = 0; j < message.length; j++) {
    var index = abc.indexOf(message.charAt(j));
    if (index >= 0) {
      secrets += abc.charAt((index + (26-k)) % 26);
    } else {
      secrets += message.charAt(j);
    }
  }
  //Handles the click of the buttons
  $(document).ready(function(){
    encrBtn.on("click", function(){
    $('#output').html(secret)
      })
    decrBtn.on("click", function(){
    $('#output').html(secrets)
      })
  });
});
$('input').keyup(function() {
function ord(x) { return x.charCodeAt(0) }
function chr(x) { return String.fromCharCode(x) }
function rot(a, b, decode) {
	return decode	? chr((26 + ord(a) - ord(b)) % 26 + ord('A'))
			: chr((26 + ord(a) + ord(b) - ord('A') * 2) % 26 + ord('A')) }
 
function trans(msg, key, decode) {
	var i = 0;
	key = key.toUpperCase();
	msg = msg.toUpperCase().replace(/[^A-Z]/g, '');
	return msg.replace(/([A-Z])/g,
		function($1) { return rot($1, key[i++ % key.length], decode) });
}
  
var kulcs = $('#keys').val().toLowerCase(); 
var uzenet = $('#textvig').val().toLowerCase();
var msg = uzenet;
var key = kulcs;
var enc = trans(msg, kulcs);
var dec = trans(enc, kulcs, 'decipher');
var smg = trans(dec, kulcs, 'decipher');
 
  $('#encod').html(enc);
  $('#smgg').html(smg);
});

var findBtn = $("#find");

//Function for finding GCD
function gcd(a,b){
    if(b==0){
        return a;
    }else{
        return gcd(b,a%b);
    }
}

//Pressing the button will show the result.
$(document).ready(function(){
  findBtn.on("click", function(){
    var aKey = parseInt($('#akey').val()); 
    var bKey = parseInt($('#bkey').val());
    var res = gcd(aKey, bKey);
    $('#gcdres').html(res);
    })
  });