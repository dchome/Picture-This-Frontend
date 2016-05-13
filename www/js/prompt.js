$(document).ready(function(){
  // $(document).on('deviceready', function(){
  //       var ft = new FileTransfer();
  //       var options = new FileUploadOptions();
  //       options.fileName = "rounds/" + roundId + "/users" + userId;
  //       options.params = {"photo[user_id]": userId, "photo[round_id]": roundId, "photo[prompt_id]": promptId, "photo[file_path]": fileName}
  //       options.chunkedMode = false;
  // });

  $('#display').on('click', '#photo-button', function(event){
    getPicture()//.then(sendPicture, onPictureFail);
  });

});

function getPrompt(){
  
}

function getPicture() {
    navigator.camera.getPicture(onPictureSuccess, onPictureFail, {
        destinationType: Camera.DestinationType.FILE_URI,
        allowEdit: false });
}

function onPictureSuccess(imageURI) {
    $('#photospace').attr("src", imageURI);
    return getFileEntry(imageURI);
}

function getFileEntry(imageURI) {
  window.resolveLocalFileSystemURL(cordova.file.cacheDirectory, function success(dirEntry) {
        // JPEG file
        dirEntry.getFile("tempFile.jpeg", { create: true, exclusive: false }, function (fileEntry) {

            // Do something with it, like write to it, upload it, etc.
            // $.post('postroute', {photo[user_id]: userId, photo[round_id]: roundId, photo[prompt_id]: promptId, photo[file_path]: fileEntry})
            alert("got file: " + fileEntry);
            // displayFileData(fileEntry.fullPath, "File copied to");

        }, onErrorCreateFile);

    }, onErrorResolveUrl);
}


function onPictureFail(message) {
}

function onErrorCreateFile() {
    alert("file not created");
}

function onErrorResolveUrl() {
    alert("something wrong in resolving url");
}

// var win = function (r) {
//     alert("Code = " + r.responseCode);
//     alert("Response = " + r.response);
//     alert("Sent = " + r.bytesSent);
// }

// var fail = function (error) {
//     alert("An error has occurred: Code = " + error.code);
//     alert("upload error source " + error.source);
//     alert("upload error target " + error.target);
// }

// function sendPicture(fileURL) {
//     ft.upload(fileURL, encodeURI("http://ourserver"), win, fail, options);
// }