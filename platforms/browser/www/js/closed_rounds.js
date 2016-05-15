function getClosedRounds(args){
$.ajax({url: 'http://www.picture-this-app.com/users/1', datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    args.closedRounds = response.rounds
    for (var i = 0; i < args.closedRounds.length; i++){
      $('#closed-rounds-list').append('<li class="closed-round-link" id="'+i+'">Created By: '+args.closedRounds[i].creator_first_name+' - '+args.closedRounds[i].end_time+' - '+args.closedRounds[i].prompt+'</li>')
    }
  }).fail(function(response){
    alert("Something is wrong.");
  })
}
