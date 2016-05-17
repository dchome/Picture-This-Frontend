function getOpenRounds(args){
  $.ajax({url: 'http://www.picture-this-app.com/users/'+args.user.id+'/rounds', datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    args.pendingRounds = response.pending_rounds;
    args.submittedRounds = response.submitted_rounds;
    if (args.pendingRounds.length > 0){
        $('#open-rounds-list-wrapper').append('<h1>You have not yet submitted a picture for:</h1><ul id="open-rounds-list"></ul>')
      for (var i = 0; i < args.pendingRounds.length; i++){
        $('#open-rounds-list').append('<li class="open-round-link" id="'+i+'">Created By: '+args.pendingRounds[i].creator_first_name+' - '+args.pendingRounds[i].end_time+' - '+args.pendingRounds[i].prompt+'</li>')
      }
    }
    if (args.submittedRounds.length > 0){
      $('#submitted-rounds-list-wrapper').append('<h1>You have submitted a picture for these open rounds:</h1><ul id="submitted-rounds-list"></ul>')
      for (var i = 0; i < args.submittedRounds.length; i++){
        $('#submitted-rounds-list').append('<li class="submitted-round-link" id="'+i+'">Created By: '+args.submittedRounds[i].creator_first_name+' - '+args.submittedRounds[i].end_time+' - '+args.submittedRounds[i].prompt+'</li>')
      }
    }
  }).fail(function(response){
    console.log(response);
  })
}
