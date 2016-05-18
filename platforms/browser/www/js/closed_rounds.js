function getClosedRounds(args){
$.ajax({url: 'http://www.picture-this-app.com/users/'+args.user.id, datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    $('#load-message').hide();
    args.closedRounds = response.rounds
    for (var i = 0; i < args.closedRounds.length; i++){
      $('#closed-rounds-list').append('<li class="gallery-link" id="'+i+'">'+args.closedRounds[i].prompt+'<br>' + formatTime(args.closedRounds[i].end_time, 'closed')+'<br>Created By: '+args.closedRounds[i].creator_first_name+'</li>')
    }
  }).fail(function(response){
    alert("Something is wrong.");
  })
}
