function getExistingPrompt(args){
    $('#prompt-body').html(args.pendingRounds[args.roundIndex].prompt)
    $('#prompt-time').html(formatTime(args.pendingRounds[args.roundIndex].end_time, 'open'));
    args.roundId = args.pendingRounds[args.roundIndex].round_id
}


function getPicture(args) {
    navigator.camera.getPicture(onPictureSuccess.bind(null, args), fail, {
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: true });
}

function onPictureSuccess(args, imageURI) {
    var options = new FileUploadOptions();
        options.fileKey="image";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

    var params = new Object();
        params.user_id = "1";
        params.round_id = args.roundId;
    options.params = params;
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://www.picture-this-app.com/photos"), win, fail, options);
}

function win(r) {
    $('#photo-confirm-message').html("Your photo was successfully submitted!")
    $('#photo-button').hide();
}

function fail(error) {
    $('#photo-confirm-message').html("Sorry, something went wrong. Please try again later.")
}
