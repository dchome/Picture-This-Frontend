function getContacts() {
    // var options = new ContactFindOptions();
    // options.filter = "";
    // options.multiple = true;
    // filter = ["*"];
    // navigator.contacts.find(filter, onContactsSuccess, onContactsFail, options);
    var spoofContacts = [["Dan", "+1 (777) 777-7777"], ["Noah", "(602) 301-6624"], ["Theo", "(222) 765-4321"]];
    for (var i = 1; i < 3; i++) {
      $('#contacts-list').append('<label for=""contacts-'+i+'">'+spoofContacts[i][0]+'</label><input type="checkbox" id="contacts-'+i+'value="'+spoofContacts[i][1]+'"><br>');
    }
    $('#contacts-list').append('<input type="submit" id="button-to-new-prompt" value="Confirm">')
}

function onContactsSuccess(contacts){
  //write function to standardize phone numbers
  for (var i = 1; i < contacts.length; i++) {
    // $('#contacts-list').append('<input type="checkbox" id="contacts-'+i+'value="'+contacts[i].phoneNumbers[0].value'+"><label for=""contacts-'+i+'">'+contacts[i].name.formatted+'</label>')
  }
    // $('#contacts-list').append('<li>'+contacts[i].name.formatted+': '+contacts[i].phoneNumbers[0].value+'</li><br>');
}

function onContactsFail(message) {
    alert("Failed because:" + message)
}
