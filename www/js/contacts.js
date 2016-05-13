function getContacts() {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    filter = ["*"];
    navigator.contacts.find(filter, onContactsSuccess, onContactsFail, options);
}

function onContactsSuccess(contacts){
    for (var i = 1; i < contacts.length; i++) {
      $('#contacts-list').append('<li>'+contacts[i].name.formatted+': ' + contacts[i].phoneNumbers[0].value+'</li>');
    }
}

function onContactsFail(message) {
    alert("Failed because:" + message)
}