const redirect_text = document.getElementById('redirect_text');

// countdown timer for redirecting page
var i = 0;

var redirectInterval = setInterval(function() {
  i = i + 1;
  var counter = 5 - i;
  redirect_text.innerText = "You will be redirected to Gallery page in " + counter + " seconds...";
  if (counter === 0) {
    clearInterval(redirectInterval);
  }
}, 1000);
