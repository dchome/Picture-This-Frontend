function getPhoto(args){
  $('#load-message').hide();
  $('#photo-wrapper').append('<img id="photo-show" class="image-show" src="'+args.photoSrc+'">');
}
