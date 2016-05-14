$(document).ready(function(){
    //need a method to get user info here
    var args = {
        prompt: "find something beautiful",

        roundId: null,

        photoId: null,

        contacts: null

        user = {
            id: "",

            firstName: "",

            lastName:""

            //any other stuff
        }
    }

    loadOpenRoundsView(args);

    //goes to the prompt for an open round
    $('#display').on('click', '#button-to-open-prompt', function() {
        loadPromptView(args);
        getExistingPrompt(args);
    })

    $('#display').on('click', '#button-to-new-prompt', function(event) {
        event.preventDefault();
        loadPromptView(args);
        createRound(args);
    })

    $('#display').on('click', '#button-to-contacts', function(event){
        getContacts();
        loadContactsView(args);
    })

    $('#display').on('click', '#button-to-open-rounds', function() {
        clearNonUserParams()
        loadOpenRoundsView(args);
        getOpenRounds(args);
    })

    $('#display').on('click', '#button-to-closed-rounds', function() {
        clearNonUserParams()
        loadClosedRoundsView(args);
        getClosedRounds(args);
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

function loadOpenRoundsView(args){
    $('#display').load('html/open_rounds.html')
}

function loadContactsView(){
    $('#display').load('html/contacts.html')
}

function loadPromptView(args){
    $('#display').load('html/prompt.html')
}

function loadClosedRoundsView(args){
    $('#display').load('html/closed_rounds.html')
}

function loadPhotoView(args){
    $('#display').load('html/photo_show.html')
}
