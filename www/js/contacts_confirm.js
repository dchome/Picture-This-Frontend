function getContactsToConfirm(args){
  for (var i = 0; i < args.contacts.length; i++) {
      $('#contacts-confirm-list').append('<li id="contacts-'+i+'">'+args.contacts[i][0]+'</li>');
    }
}

function formatContacts(contacts){
  var formatted = {}
  for (var i=0; i< contacts.length; i++) {
    formatted[contacts[i][0]] = formatPhone(contacts[i][1]);
  }
  return formatted;
}

function formatPhone(number){
  var n = number.replace(/\D/g,'');
  if (n[0] === "1"){
    n.slice(1)
  }
  return n;
}

function createRound(args){
  var formattedContacts = formatContacts(args.contacts)
  $.ajax({
    url: 'http://www.picture-this-app.com/rounds',
    method: 'POST',
    dataType: "JSON",
    data: {
      id : args.user.id,
      participants : formattedContacts,
      deck_id : args.deckId
    }
  }).done(function(response){
    alert("success")
  //  roundId = response.round.id;
  //  prompt = response.round.prompt;
  //
  }).fail(function(response){
    alert("You still suck.")
  })
}

