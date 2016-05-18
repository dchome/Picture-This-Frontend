function getPhoto(args){
  $('#load-message').hide();
  $('#photo-wrapper').append('<img id="photo-show" src="'+args.photoSrc+'">');
}
