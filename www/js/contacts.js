function getContacts() {
    var options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;
    filter = ["*"];
    navigator.contacts.find(filter, onContactsSuccess, onContactsFail, options);
}

function onContactsSuccess(contacts){
  alert("You have "+contacts.length+" contacts.")
  for (var i = 1; i < contacts.length; i++) {
    $('#contacts-list').append(
      '<input type="checkbox" name="contacts[]" value="'+[contacts[i].name.formatted, contacts[i].phoneNumbers[0].value]+'/>'+contacts[i].name.formatted+'<br>'
      );
  }
}

function onContactsFail(message) {
    alert("Failed because:" + message)
}
