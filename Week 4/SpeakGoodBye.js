(function (window) {

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function () {
    console.log(speakWord + " " + nomi);
  }

  window.byeSpeaker = byeSpeaker;

})(window);
