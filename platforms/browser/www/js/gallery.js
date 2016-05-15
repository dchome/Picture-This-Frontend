function getGallery(args){
  var url = 'http://www.picture-this-app.com/rounds/'+args.roundId+'/photos'
  $.ajax({url: url, datatype: "JSONP", jsonp: 'jsoncallback'
  }).done(function(response){
    console.log(response)
    for (var i = 0; i < response.participants.submitted.length; i++){
      $('#gallery-list').append('<li>'+response.participants.submitted[i].first_name+':</li><br><img class="gallery-photo" src="'+response.participants.submitted[i].photo+'"/><br>')
    }
  $('#gallery-list').append('<li>Not yet submitted:</li>')
  for (var i = 0; i < response.participants.pending.length; i++){
    $('#gallery-list').append('<li>'+response.participants.pending[i].first_name+'</li>')
  }
  }).fail(function(response){
    alert("Something is wrong.");
  })
}
