// wrapper
var elem = document.createElement('div');
elem.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;';
elem.id = "nedry";

// img
var img = document.createElement('img');
img.src='https://raw.githubusercontent.com/jankcat/misc-scripts/master/nedry/nedry.gif';
elem.appendChild(img);

// img
var audio = document.createElement('audio');
audio.src='https://raw.githubusercontent.com/jankcat/misc-scripts/master/nedry/nedry.mp3';
audio.autoplay='true';
audio.loop='true';
elem.appendChild(audio);

document.body.appendChild(elem);

(function(){
  var e = document.getElementById('nedry');
  var text = document.createElement('span');
  text.innerHTML = "<br/>YOU DIDN'T SAY THE MAGIC WORD!";
  e.appendChild(text);
  setTimeout(arguments.callee, 375);
})();
