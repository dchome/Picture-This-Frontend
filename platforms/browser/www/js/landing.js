$(document).ready(function(){
    //need a method to get user info here
    var user = function(){
        id = "",
        firstName = "",
        lastName = ""
        //any other stuff
    }
    var prompt = null;

    var roundId = null;

    var photoId = null;

    var contacts = null;

    loadOpenRoundsView(); 

    //goes to the prompt for an open round
    $('#display').on('click', '#button-to-open-prompt', function() {
        loadPromptView();
        getExistingPrompt();
    })

    $('#display').on('click', '#button-to-new-prompt', function() {
        loadPromptView();
        getNewPrompt();
    })

    $('#display').on('click', '#button-to-contacts', function(event){
        getContacts();
        loadContactsView();
    })

    $('#display').on('click', '#button-to-open-rounds', function() {
        clearNonUserParams()
        loadOpenRoundsView();
        getOpenRounds();
    })

    $('#display').on('click', '#button-to-closed-rounds', function() {
        clearNonUserParams()
        loadClosedRoundsView();
        getClosedRounds();
    })

    $('#display').on('click', '#photo-button', function(event){
        getPicture()//.then(sendPicture, onPictureFail);
    });
})

function clearNonUserParams(){
    prompt = null;
    roundId = null;
    photoId = null;
    contacts = null;
}

function loadOpenRoundsView(){
    $('#display').load('html/open_rounds.html')
}

function loadContactsView(){
    $('#display').load('html/contacts.html')
}

function loadPromptView(){
    $('#display').load('html/prompt.html')
}

function loadClosedRoundsView(){
    $('#display').load('html/closed_rounds.html')
}

function loadPhotoView(){
    $('#display').load('html/photo_show.html')
}