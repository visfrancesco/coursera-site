(function (window) {

  var helloSpeaker = {};

  var speakWord = "Hello";

  helloSpeaker.speak = function () {
    console.log(speakWord + " " + nomi);
  }

  window.helloSpeaker = helloSpeaker;

})(window);
