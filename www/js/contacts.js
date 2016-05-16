function getContacts(args) {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    filter = ["*"];
    navigator.contacts.find(filter, onContactsSuccess, onContactsFail, options);
}

function onContactsSuccess(contacts){
    for (var i = 1; i < contacts.length; i++) {
      $('#all-contacts-list').append('<label for="contacts-'+i+'">'+contacts[i].name.formatted+'</label><input type="checkbox" id="contacts-'+i+'" value="'+contacts[i].phoneNumbers[0].value+'"><br>');
    }
    $('#all-contacts-list').append('<input type="submit" id="button-to-contacts-confirm" value="Select">')
}

function onContactsFail(message) {
    alert("Failed because:" + message)
}

function assignContacts(args){
  args.contacts = []
  $('#all-contacts-list :checked').each(function(){
    args.contacts.push([$("label[for='"+this.id+"']").html(), this.value])
  })
}
