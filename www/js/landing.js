$(document).ready(function(){
    //need a method to get user info here
    var args = {

        openRounds: [],

        closedRounds: [],

        roundIndex: null,

        roundId: null,

        deckId: null,

        photoSrc: null,

        contacts: [],

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

    $('#display').on('click', '.gallery-link', function(event) {
        $target = event.target;
        event.preventDefault();
        args.roundIndex = parseInt($target.id)
        args.roundId = args.closedRounds[args.roundIndex].round_id
        loadGalleryView(args);
    })

    $('#display').on('click', '.gallery-photo', function(event) {
        $target = event.target;
        event.preventDefault();
        args.photoSrc = $target.src
        loadPhotoView(args);
    })

    $('#display').on('click', '#button-to-gallery', function(event) {
        loadGalleryView(args);
    })

    $('#display').on('click', '.deck-link', function(event) {
        $target = event.target
        event.preventDefault();
        args.deckId = parseInt($target.id)
        loadContactsView(args);
    })

    $('#display').on('click', '#button-to-new-prompt', function(event) {
        event.preventDefault();
        createRound(args);
    })

    $('#display').on('click', '#button-to-contacts', function(event){
        event.preventDefault();
        loadContactsView(args);
    })

    $('#display').on('click', '#button-to-contacts-confirm', function(event){
        event.preventDefault();
        assignContacts(args);
        loadConfirmContactsView(args);
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
        getPicture(args);
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

function loadContactsView(args){
    $('#display').load('html/contacts.html', function(){
      getContacts(args);
    })
}

function loadConfirmContactsView(args){
    $('#display').load('html/contacts_confirm.html', function(){
      getContactsToConfirm(args);
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

function loadGalleryView(args){
    $('#display').load('html/gallery.html', function(){
        getGallery(args)
    });
}

function loadPhotoView(args){
    $('#display').load('html/photo.html', function(){
        getPhoto(args)
    });
}
