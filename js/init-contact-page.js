var sendEmail = function() {
  var name = document.getElementById('name-input').value
  var subject = document.getElementById('subject-input').value
  var msg = document.getElementById('message-input').value
  if ((name.length < 3)  || (!name.match(/^[a-z\d\-_\s]+$/i))) {
    alert('The name could be alphanumeric, and must be bigger than 3 characters long')
    return
  }
  if ((subject.length < 3)  || (!subject.match(/^[a-z\d\-_\s]+$/i))) {
    alert('The subject could be alphanumeric, and must be bigger than 3 characters long')
    return
  }
  if ((msg.length < 5)) {
    alert('The message must be bigger than 5 characters long')
    return
  }
  document.getElementById('send-button').href = 'mailto:carracedo.gaston@gmail.com?&subject=' + name + ': '+ subject + '&body=' + msg
}

var sendemailButton = function(sendButton) {
  sendButton.onclick = sendEmail
}
  
var init = function () {
  var contactMe = document.getElementById('send-button')
  sendemailButton(contactMe)
}

window.onload = init
