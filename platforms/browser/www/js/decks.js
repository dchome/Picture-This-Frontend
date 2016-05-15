function getDecks(args){
  $.ajax({url: 'http://www.picture-this-app.com/decks', datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    for (var i = 0; i < response.decks.length; i++){
      $('#deck-list').append('<li class="deck-link" id="'+i+'">'+response.decks[i].name+'</li>')
    }

  }).fail(function(response){
    alert("Something is wrong!");
  })
}
