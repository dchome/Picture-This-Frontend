$(document).ready(function(){
    //need a method to get user info here
    var args = {

        openRounds: [],

        closedRounds: [],

        roundIndex: null,

        photoId: null,

        contacts: null,

        user : {
            id: 1,

            firstName: "",

            lastName:""

            //any other stuff
        }
    }

    loadOpenRoundsView(args);

    //goes to the prompt for an open round
    $('#display').on('click', '.open-round-link', function(event) {
        $target = event.target
        event.preventDefault();
        args.roundIndex = parseInt($target.id)
        loadPromptView(args);
    })

    $('#display').on('click', '#button-to-new-prompt', function(event) {
        event.preventDefault();
        loadPromptView(args);
        createRound(args);
    })

    $('#display').on('click', '#button-to-contacts', function(event){
        event.preventDefault();
        getContacts();
        loadContactsView(args);
    })

    $('#display').on('click', '#button-to-open-rounds', function(event) {
        event.preventDefault();
        loadOpenRoundsView(args);
    })

    $('#display').on('click', '#button-to-closed-rounds', function(event) {
        event.preventDefault();
        loadClosedRoundsView(args);
    })

    $('#display').on('click', '#photo-button', function(event){
        getPicture()//.then(sendPicture, onPictureFail);
    });
})

function clearNonUserParams(args){
    args.prompt = null;
    args.roundId = null;
    args.photoId = null;
    args.contacts = null;
}

function loadOpenRoundsView(args){
    $('#display').load('html/open_rounds.html', function(){
        getOpenRounds(args)
    });
}

function loadContactsView(){
    $('#display').load('html/contacts.html')
}

function loadPromptView(args){
    $('#display').load('html/prompt.html', function(){
        getExistingPrompt(args);
    });
}

function loadClosedRoundsView(args){
$('#display').load('html/closed_rounds.html', function(){
        getClosedRounds(args)
    });
}

function loadPhotoView(args){
    $('#display').load('html/photo_show.html')
}
