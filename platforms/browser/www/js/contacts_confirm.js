function getContactsToConfirm(args){
  for (var i = 0; i < args.contacts.length; i++) {
      $('#contacts-confirm-list').append('<li id="contacts-'+i+'">'+args.contacts[i][0]+'</li>');
    }
}

function contactNumbers(contacts){
  return contacts.map(function(contact){return contact[1]})
}

function formatPhone(number){
  var n = number.replace(/\D/g,'');
  console.log(n)
  if (n[0] === "1"){
   return n.slice(1)
  }
  return n;
}

function createRound(args){
  var contactNumbers = contactNumbers(args.contacts)
  $.ajax({
    url: 'http://www.picture-this-app.com/rounds',
    method: 'POST',
    dataType: "JSON",
    data: {
      id : args.user.id,
      contact_numbers : contactNumbers,
      deck_id : args.deckId
    }
  }).done(function(response){
    args.openRounds.unshift(response.round)
    args.roundIndex = 0
    loadPromptView(args);
  }).fail(function(response){
    alert("You still suck.")
  })
}

