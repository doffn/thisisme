function getVoices() {
    let voices = speechSynthesis.getVoices();
    if(!voices.length){
      // some time the voice will not be initialized so we can call spaek with empty string
      // this will initialize the voices 
      let utterance = new SpeechSynthesisUtterance("");
      speechSynthesis.speak(utterance);
      voices = speechSynthesis.getVoices();
    }
    return voices;
  }
  
  
  function speak(text, voice, rate, pitch, volume) {
    // create a SpeechSynthesisUtterance to configure the how text to be spoken 
    let speakData = new SpeechSynthesisUtterance();
    speakData.volume = volume; // From 0 to 1
    speakData.rate = rate; // From 0.1 to 10
    speakData.pitch = pitch; // From 0 to 2
    speakData.text = text;
    speakData.lang = 'en';
    speakData.voice = voice;
    // pass the SpeechSynthesisUtterance to speechSynthesis.speak to start speaking 
    speechSynthesis.speak(speakData);

}

// this will help us get the text from the input

function myText() {
  let Text = document.getElementById("mytext").value;
  return Text
}




function Talk(){


if ('speechSynthesis' in window && myText() != "" ){

  let voices = getVoices();
  let rate = 1, pitch = 2, volume = 5;
  let text = myText();

  speak(text, voices[0], rate, pitch, volume);
  /*setTimeout(()=>{ // speak after 2 seconds 
    rate = 0.5; pitch = 1.5, volume = 0.5;
    text = "Spaecking with volume = 0.5 rate = 0.5 pitch = 1.5 ";
    speak(text, voices[10], rate, pitch, volume );
  }, 2000);*/
}else{
  console.log(' Speech Synthesis Not Supported 😞'); 
}
}

// this function will empty our text bar
function Reset(){
  speechSynthesis.cancel()
  document.getElementById("mytext").value = ""
  
}




  


// to translate in to english


function translator() {
    var text = myText();
    google.language.translate(text, 'es', 'en', function(result) {
        var translated = document.getElementById("translation");
        if (result.translation) {
            return(result.translation)
        }
    });
}
