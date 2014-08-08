
var recognizing = false;
var ignore_onend = false;

if (!('webkitSpeechRecognition' in window)) {
    // show text box for entering a search word
} else {
    // else they have speech support, so make the microphone button 
    // start speech recognition
    
    // create an instance of the speech recognition constructor
    var recognition = new webkitSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onstart = function() {
        // setting a boolean that the mic is currently listening
        recognizing = true;

        // visually change the mic icon to show that it is listening
        // change the image maybe???
        // start_img.src = 'mic-animate.gif';
    };

    recognition.onerror = function(event) {
        // if there is an error, show them some visual feedback
        if (event.error == 'no-speech') {
            // 
        }
        if (event.error == 'audio-capture') {
            // 
        }
        if (event.error == 'not-allowed') {
            // 
        }
        ignore_onend = true;
    };

    recognition.onend = function() {
        // set listening as false
        recognizing = false;
        if (ignore_onend) {
            // if there was an error, don't do anything
            return;
        }
        ignore_onend = false;


        // set the mic back to the original image
        start_img.src = 'mic.gif';
    };

    recognition.onresult = function(event) {
        // look at the event object to find the words provided to you
    };
}

$('.mic-icon').on('click', function(){
    if (recognizing) {
        recognition.stop();
        return;
    }
    recognition.lang = "en-US";
    recognition.start();
})

