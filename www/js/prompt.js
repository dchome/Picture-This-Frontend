function getExistingPrompt(args){
    $('#prompt-body').html(args.openRounds[args.roundIndex].prompt)
    $('#prompt-time').html(args.openRounds[args.roundIndex].end_time)
    args.roundId = args.openRounds[args.roundIndex].round_id
}

function showExistingPhoto(args){
    $('#photo-wrapper')
}

function getPicture(args) {
    navigator.camera.getPicture(onPictureSuccess.bind(null, args), fail, {
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: false });
}

function onPictureSuccess(args, imageURI) {
    args.photo = imageURI);
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
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    alert(r.response);
    }

function fail(error) {
    alert('fail')
}
