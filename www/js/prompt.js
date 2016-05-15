function getExistingPrompt(args){
    $('#prompt-body').html(args.openRounds[args.roundIndex].prompt)
    $('#prompt-time').html(args.openRounds[args.roundIndex].end_time)
}

function getPicture() {
    navigator.camera.getPicture(onPictureSuccess, fail, {
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: false });
}

function onPictureSuccess(imageURI) {
    $('#photospace').attr("src", imageURI);
    var options = new FileUploadOptions();
        options.fileKey="file";
        options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";

    var params = new Object();
        params.value1 = "test";
        params.value2 = "param";

    options.params = params;
    options.chunkedMode = false;

    alert(imageURI);
    var ft = new FileTransfer();
    ft.upload(imageURI, encodeURI("http://www.picture-this-app.com/rounds/1/photos"), win, fail, options);
}

function win(r) {
    console.log("Code = " + r.responseCode);
    console.log("Response = " + r.response);
    console.log("Sent = " + r.bytesSent);
    alert(r.response);
    }

function fail(error) {
    var message = ""
    error.each(function(thing){message+=JSON.stringify(thing)})
    alert("error:" + message );
    console.log(error)
}
