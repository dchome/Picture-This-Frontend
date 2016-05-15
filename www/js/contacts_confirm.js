function getContactsToConfirm(args){
  for (var i = 0; i < args.contacts.length; i++) {
      $('#contacts-confirm-list').append('<li id="contacts-'+i+'">'+args.contacts[i][0]+'</li>');
    }
}


function createRound(args){
  $.ajax({
    url: 'http://www.picture-this-app.com/rounds',
    method: 'POST',
    data: {
      id : args.user.id,
      participants : args.contacts,
      deck_id : args.deckId
    }
  }).done(function(response){
    alert("success")
  //  roundId = response.round.id;
  //  prompt = response.round.prompt;
  //
  }).fail(function(response){
    alert("fail")
  })
}
