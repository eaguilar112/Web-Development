// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let contact = document.getElementById('contact-page');
let message;

document.getElementById('submit-button').onclick = function() {
    message = document.createElement('p');
    message.innerText = "Thank you for your message";
    message.style.textAlign = "center";
    message.style.fontSize = "24pt";
    contact.replaceWith(message);
};

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

