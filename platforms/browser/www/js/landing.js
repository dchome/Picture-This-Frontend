$(document).ready(function(){
    //need a method to get user info here
    var args = {

        openRounds: [],

        closedRounds: [],

        roundIndex: null,

        deckId: null,

        photoId: null,

        contacts: null,

        user : {
            id: 1
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

    $('#display').on('click', '.deck-link', function(event) {
        $target = event.target
        event.preventDefault();
        args.deckId = parseInt($target.id) - 1
        loadContactsView(args);
    })

    $('#display').on('click', '#button-to-new-prompt', function(event) {
        event.preventDefault();
        loadPromptView(args);
        createRound(args);
    })

    $('#display').on('click', '#button-to-open-rounds', function(event) {
        event.preventDefault();
        loadOpenRoundsView(args);
    })

    $('#display').on('click', '#button-to-closed-rounds', function(event) {
        event.preventDefault();
        loadClosedRoundsView(args);
    })

    $('#display').on('click', '#button-to-decks', function(event) {
        event.preventDefault();
        loadDecksView(args);
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
    $('#display').load('html/contacts.html', function(){
      getContacts();
    })
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

function loadDecksView(args){
    $('#display').load('html/decks.html', function(){
        getDecks(args)
    });
}

function loadPhotoView(args){
    $('#display').load('html/photo_show.html')
}
