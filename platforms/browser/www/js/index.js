$(document).ready(function(){

  $('#display').on('click', '#login-button', function(event) {
    event.preventDefault();
    attemptToLogIn();
  })

  $('#display').on('click', '#register-link', function(event) {
    loadRegisterView();
  });

  $('#display').on('click', '#register-submit', function(event) {
    event.preventDefault();
    attemptToRegister();
    test()
  });

  $('#display').on('click', '#button-to-login', function(event) {
    loadLoginView();
  });
});

function loadRegisterView(){
  $('#display').load('html/register.html');
}

function loadLoginView(){
  $('#display').load('html/login.html');
}

function attemptToLogIn(){
  form = $('#login-form');
  $.ajax({
    url: form.attr('action'),
    method: form.attr('method'),
    data: form.serialize()
  }).done(function(response){
    document.location = 'landing.html'
  }).fail(function(response){
    form[0].reset()
    $('#errors').append(JSON.stringify(response))
  })
}

function attemptToRegister(){
  form = $('#register-form')
  $.ajax({
    url: form.attr('action'),
    method: form.attr('method'),
    data: form.serialize()
  }).done(function(response){
    document.location = 'landing.html'
  }).fail(function(response){
    form[0].reset()
  })
}
