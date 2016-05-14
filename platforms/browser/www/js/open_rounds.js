function getOpenRounds(event, args){
  $target = $(event.target)
  $.ajax({url: 'http//:something/user/'+args.user.id+'open_rounds'
    }).done(function(response){
      for (var i = 0; i < response.params.open_rounds..length; i++) {
        args.rounds = response.params.open_rounds
        $('#open-rounds-list').append('
          <li><ul>
            <li>Created By:'
              +args.rounds[i].creator_name
              +' - '
              +args.rounds[i].time_remaining
              +'<button id="open-round-'+i'" type="button">Go to Prompt</button>'
          '</ul></li>'
        )
      }
    })
}
