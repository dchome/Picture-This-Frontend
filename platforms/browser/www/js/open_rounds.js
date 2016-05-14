function getOpenRounds(args){ // removed args params
  $.ajax({url: 'http://www.picture-this-app.com/users/1/rounds', datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    args.openRounds = response.rounds
    //alert($.parseJSON(response.rounds[0]));
    console.log(args.openRounds)
    console.log(args.openRounds.length)
    for (var i = 0; i < args.openRounds.length; i++){
      $('#open-rounds-list').append('<li class="open-round-link" id="'+i+'">Created By: '+args.openRounds[i].creator_first_name+' - '+args.openRounds[i].end_time+'</li>')
    }
  }).fail(function(response){
    alert("Something is wrong.");
  })
}
