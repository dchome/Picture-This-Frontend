$(document).ready(function(){

  $('#display').on('click', '#login-button', function(event) {
    $target = event.target
    event.preventDefault();
    //write a post request to log in here
    //but for now:
    document.location = 'landing.html'
  })
});
